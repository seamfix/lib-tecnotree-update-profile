import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import soapRequest from 'easy-soap-request';
import moment from 'moment';
import { ObjectId } from 'mongoose';
import * as R from 'ramda';
import { json2xml, xml2json } from 'xml-js';
import { MadApiRequestDto } from '../dto/madapi-request.dto';
import { ResponseDto } from '../dto/response.dto';
import IResponse from '../interfaces/response.interface';
import { ITransformRequest } from '../interfaces/transform-request.interface';
import { IMadApiUpdateProfile } from '../interfaces/madapi-update-profile.interface';
import { IValidatorResponse } from '../interfaces/validator-response.interface';
import { IApiLog } from '../interfaces/api-log.interface';
import { Gender, GenderValue, ResponseCode, ResponseMessage } from '../enum/common.enum';
import { DEFAULT_VALUES, REQUEST_TYPE } from '../constant/common';
import { generateMadApiAuthToken, postRequest } from '../utils/utils';

export class MadApiUpdateProfileService implements IMadApiUpdateProfile {

    private apiLog: any;

    constructor(externalApiLogModel: any) {
        this.apiLog = externalApiLogModel
    }

    async transformRequestDTO(dto: MadApiRequestDto): Promise<ITransformRequest> {
        const transformRequestDTOResponse: ITransformRequest = {
            isTransformed: false,
        }
        try {

            const validateDto = await this.dtoValidation(dto);
            if (!validateDto.isValid) {
                transformRequestDTOResponse.isTransformed = false;
                transformRequestDTOResponse.msg = validateDto.msg;
                return transformRequestDTOResponse;
            }

            const payload = {
                body: null
            };

            payload.body = {
                "@type": "PrepaidRegistrationRequest",
                status: "captured",
                interactionItem: [
                    {
                        item: {
                            "@referredType": "Customer",
                            "@baseType": "PartyRole",
                            "@type": "Customer",
                            name: dto.firstName,
                            customerType: "Individual",
                            engagedParty:
                            {
                                contactMedium: [
                                    {
                                        medium: {
                                            addressLine1: dto.addressLine1,
                                            addressLine2: dto.addressLine2,
                                            addressLine3: "",
                                            addressLine4: "",
                                            streetName: dto.street,
                                            city: dto.city,
                                            stateOrProvince: dto.state,
                                            country: dto.country,
                                            postcode: dto.postalCode,
                                            type: "POBox"
                                        },
                                        type: "Address",
                                        role: dto.addressType
                                    },
                                    {
                                        medium: {
                                            number: dto.msisdn,
                                            type: "mobile"
                                        },
                                        type: "Phone",
                                        preferred: dto.phonePreferred
                                    },
                                    {
                                        medium: {
                                            number: dto.alternateNo,
                                            type: "telephone"
                                        },
                                        type: "Phone",
                                        preferred: dto.alternateNoPreferred
                                    },
                                    {
                                        medium: {
                                            emailAddress: dto.emailAddress,
                                            type: "emailAddress"
                                        },
                                        type: "EmailAddress",
                                        preferred: dto.emailPreferred
                                    }
                                ],
                                "@type": "Individual",
                                givenName: dto.firstName,
                                middleName: dto.middleName,
                                familyName: dto.lastName,
                                individualIdentification: [
                                    {
                                        placeOfIssue: dto.idIssuePlace,
                                        issuingDate: dto.idIssueDate,
                                        expiryDate: dto.idExpiryDate,
                                        visaExpiryDate: dto.visaExpiryDate,
                                        documentPurpose: "POID",
                                        type: dto.idType,
                                        identificationId: dto.idNumber
                                    }
                                ],
                                birthDate: dto.dob,
                                nationality: dto.nationality
                            }
                        }
                    },
                    {
                        item: {
                            "@type": "StarterPack",
                            id: dto.verificationRespValue
                        }
                    },
                    {
                        item: {
                            "@type": "ProductOrder",
                            orderItem: [{
                                action: "add",
                                orderItem: []
                            }]
                        }
                    },
                    {
                        item: {
                            "@type": "Product",
                            customFields: {
                                momoFlag: dto.productMomoStatus
                            }
                        }
                    },
                    {
                        item: {
                            lifecycleState: dto.docUploadStatus,
                            "@type": "Document",
                            documentSpecification: {
                                id: "POID"
                            }
                        }
                    }
                ],
                channel: [
                    {
                        id: dto.channelId,
                        name: dto.channelName,
                        role: dto.channelRole,
                        "@referredType": dto.channelReferredType,
                        "@type": dto.channelType
                    }
                ]
            }

            if (!payload.body) {
                transformRequestDTOResponse.isTransformed = false;
                transformRequestDTOResponse.msg = `Generated param object does not have enough values to make a request`;
                return transformRequestDTOResponse;
            }

            transformRequestDTOResponse.isTransformed = true;
            transformRequestDTOResponse.transformedObj = payload;
            return transformRequestDTOResponse;
        } catch (error: any) {
            console.log(`Something went wrong while transforming Request DTO. ERROR : ${JSON.stringify(error)}`);
            transformRequestDTOResponse.isTransformed = false;
            transformRequestDTOResponse.msg = error.message;
            return transformRequestDTOResponse;
        }
    }

    transformResponseDTO(responsePayload: any): ResponseDto {
        const transformResponse: ResponseDto = {
            code: DEFAULT_VALUES.FAILED_CODE,
            message: "Error transforming response",
            payload: null,
        };

        try {
            if (!responsePayload || responsePayload['error']) {
                transformResponse.code = -1;
                transformResponse.message = responsePayload ? 'Unable to transform response' : responsePayload['error'];
                return transformResponse;
            }
        } catch (error) {
            transformResponse.message = `Error while transforming Response Payload. Error: ${error}`;
            return transformResponse;
        }

        const responseData = responsePayload["data"];

        const responseJson: ResponseDto = {
            code: DEFAULT_VALUES.SUCCESS_CODE,
            message: responsePayload["resultDescription"],
            payload: responseData,
        }
        return responseJson;
    }

    async saveRequestPayload(requestPayload: any, dto: MadApiRequestDto, requestType: string) {
        try {
            const payload: IApiLog = {
                uniqueId: dto.uniqueId,
                msisdn: dto.msisdn,
                requestType: requestType,
                startTime: new Date(),
                tpRequestPayload: JSON.stringify(requestPayload)
            }
            const createApiRequestLog = new this.apiLog({
                ...payload,
            });
            const jsonDocument = await createApiRequestLog.save();
            return jsonDocument;
        } catch (error) {
            console.log(`Something went wrong while adding request payload to DB. ${JSON.stringify(error)}`);
            return null;
        }
    }

	async saveResponsePayload(documentId: ObjectId, responsePayload: any) {
		try {
			const model = await this.apiLog.findOne({
				_id: documentId
			});
			if (model) {
				await this.apiLog.updateOne(
					{ _id: documentId },
					{
						endTime: new Date(),
						duration: this.calculateDuration(model.startTime, new Date()),
						tpResponsePayload: JSON.stringify(responsePayload)
					}
				);
				return true;
			}
			return false;
		} catch (error) {
            console.log(`Something went wrong while adding response payload to DB. ERROR: ${JSON.stringify(error)}`);
			return false;
		}
	}

    async integration(request: MadApiRequestDto) {
        const requestPayload = await this.transformRequestDTO(request);
        if (!requestPayload.isTransformed) {
            const response: IResponse = {
                status: -1,
                msg: requestPayload.msg,
                payload: null
            }
            return response;
        }

        let token = null;

        const authTokenResponse = await this.generateAuthToken(request);

        if (authTokenResponse.status === 0 && authTokenResponse.payload) {
            token = authTokenResponse.payload;
        } else {
            return authTokenResponse;
        }

        const jsonDocument: any = await this.saveRequestPayload(
            requestPayload,
            request,
            REQUEST_TYPE.MAD_API_UPDATE_PROFILE
        );

        let verificationResponse = null;

        const verificationApiResponse = await this.callUpdateProfileApi(
            request,
            requestPayload.transformedObj,
            token
        );

        if (verificationApiResponse.status === 0 && verificationApiResponse.payload) {
            verificationResponse = verificationApiResponse.payload;
        } else {
            return verificationApiResponse;
        }

        if (jsonDocument) {
            await this.saveResponsePayload(jsonDocument._id, verificationResponse);
        }

        const transResponseDto = this.transformResponseDTO( verificationResponse );

        const integrationResponse: IResponse = {
            status: transResponseDto.code,
            msg: transResponseDto.message,
            payload: transResponseDto.payload,
        };

        return integrationResponse;

    }

    calculateDuration(startTime: Date, endTime: Date) {
        const differenceValue = (endTime.getTime() - startTime.getTime()) / 1000;
        return Math.abs(Math.round(differenceValue));
    }

    async dtoValidation(dto: any): Promise<IValidatorResponse> {
        const userStructureClass = plainToInstance(MadApiRequestDto, dto);
        const errors = await validate(userStructureClass, { skipMissingProperties: true });
        const validateResponse: IValidatorResponse = {
            isValid: true,
            msg: null
        };
        if (errors.length > 0) {
            validateResponse.msg = JSON.stringify(errors);
            if (errors[0] && errors[0]['constraints']) {
                validateResponse.msg = JSON.stringify(errors[0]['constraints']);
            }
            validateResponse.isValid = false;
        };
        return validateResponse;
    }

    getDateByFormate(date: Date, format: string) {
        if (!date) {
            return '';
        }
        return moment(date).format(format);
    }

    getGender(gender: string): string {
        if (!gender) {
            return ''
        } else {
            if (gender.toLocaleLowerCase() === GenderValue.MALE) {
                return Gender.MALE
            } else if (gender.toLocaleLowerCase() === GenderValue.FEMALE) {
                return Gender.FEMALE
            } else {
                return ''
            }
        }

    }

    async generateAuthToken(dto: MadApiRequestDto): Promise<IResponse> {
        const response: IResponse = {
          status: -1,
          payload: null,
          msg: null,
        };

        const authReqBody = {
          client_id: dto.authClientId,
          client_secret: dto.authClientSecret,
        };

        const jsonDocument: any = await this.saveRequestPayload(
          authReqBody,
          dto,
          REQUEST_TYPE.MAD_API_AUTH_TOKEN
        );

        const authTokenResponse = await generateMadApiAuthToken(
          authReqBody,
          dto.authGrantType,
          dto.authUrl
        );

        if (jsonDocument) {
          await this.saveResponsePayload(jsonDocument._id, authTokenResponse);
        }

        if (authTokenResponse && authTokenResponse["access_token"]) {
          response.status = 0;
          response.payload = authTokenResponse["access_token"];
          response.msg = null;
          return response;
        } else {
          response.msg = `Error while generating auth token for MADAPI Update Profile`;
          return response;
        }
    }

    async callUpdateProfileApi(dto: MadApiRequestDto, payload: { body: any }, token: string ): Promise<IResponse> {
        const response: IResponse = {
          status: -1,
          payload: null,
          msg: null,
        };

        const header = {
          "x-country-code": dto.countryCode,
          transactionId: dto.transactionId,
        };

        const apiResponse = await postRequest(
            dto.apiUrl,
            payload.body,
            token,
            header,
            null
        );

        if (apiResponse && apiResponse.data?.error) {
            response.status = -1;
            response.payload = apiResponse.data.error;
            return response;
        }

        if (apiResponse && apiResponse.data?.id) {
            response.status = 0;
            response.payload = apiResponse.data;
            return response;
        }

        response.status = -1;
        response.payload = "Error reaching third party for submission";
        return response;
    }
}