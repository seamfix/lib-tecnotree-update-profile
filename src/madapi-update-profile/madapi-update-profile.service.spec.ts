import { MadApiRequestDto } from '../dto/madapi-request.dto';
import { MadApiUpdateProfileService } from './madapi-update-profile.service';
import { MAD_API_UPDATE_PROFILE_RESPONSE} from '../mock/mock';
import { REQUEST_TYPE } from '../constant/common';
import IResponse from '../interfaces/response.interface';

describe('Change Request service', () => {

    let apiLogModel = jest.fn().mockReturnValue({});

	apiLogModel = jest.fn(() => ({
        save: jest.fn().mockReturnThis(),
        findOne: jest.fn().mockResolvedValue({ uniqueId: 'uniqueId', msisdn: 'msisdn', startTime: new Date() }),
        create: jest.fn().mockResolvedValue({ uniqueId: 'uniqueId', msisdn: 'msisdn', startTime: new Date() }),
        updateOne: jest.fn().mockResolvedValue({ uniqueId: 'uniqueId', msisdn: 'msisdn', startTime: new Date() }),
    }));

	const dto: MadApiRequestDto = {
		authUrl: 'authurl',
        authClientId: 'XXXXX',
        authClientSecret: 'XXXXX',
        authGrantType: 'client_credentials',
		apiUrl: 'url',
		uniqueId: 'uniqueId-9876546',
		msisdn: '9040009811',
		firstName: 'John',
		middleName: 'S',
		lastName: 'Doe',
		idNumber: 'poid912000097',
		idType: 'NationalID',
		idExpiryDate: new Date(),
		idIssueDate: new Date(),
		idIssuePlace: 'idIssuePlace',
		visaExpiryDate: new Date(),
		docUploadStatus: 'uploaded',
		verificationRespValue: '99225050015847013486',
		addressType: 'ResidenceAddress',
		addressLine1: 'Baker Street',
		street: 'Street',
		city: 'Juba',
		state: 'SS',
		country: 'Zambia',
		postalCode: '567876',
		emailAddress: 'test@yopmail.com',
		alternateNo: '',
		emailPreferred: false,
		alternateNoPreferred: false,
		phonePreferred: true,
		productMomoStatus: 'true',
		channelId: 'isl',
		channelName: 'ISL',
		channelRole: 'interaction creation',
		channelReferredType: 'Channel',
		channelType: 'ISL',
		countryCode: 'CIV',
        transactionId: '1111111'
	}

    it('should transform request', async () => {
		const serviceObj = new MadApiUpdateProfileService(apiLogModel);
		const returnObj = await serviceObj.transformRequestDTO(dto);
		expect(returnObj.isTransformed).toBeTruthy();
    });

	it('should return error on transform request', async () => {
		const serviceObj = new MadApiUpdateProfileService(apiLogModel);
		serviceObj.dtoValidation = jest.fn().mockImplementationOnce(() => {
			throw new Error('testError');
		});
		const returnObj = await serviceObj.transformRequestDTO({
			...dto
		});
		expect(returnObj.msg).toBe('testError');
	});

	it('should return fail response on transform request because added wrong value in optional field', async () => {
		apiLogModel = jest.fn(() => ({
            save: jest.fn().mockResolvedValue({ uniqueId: 'uniqueId', msisdn: 'msisdn', startTime: new Date() }),
        }));
        const serviceObj = new MadApiUpdateProfileService(apiLogModel);
		const returnObj = await serviceObj.transformRequestDTO({
			authUrl: 'authurl',
			authClientId: 'XXXXX',
			authClientSecret: 'XXXXX',
			authGrantType: 'client_credentials',
			uniqueId: 'uniqueId',
			msisdn: '9040009811',
			firstName: 'John',
			middleName: 'S',
			lastName: 'Doe',
			idNumber: 'poid912000097',
			idType: 'NationalID',
			idExpiryDate: new Date(),
			idIssueDate: new Date(),
			idIssuePlace: 'idIssuePlace',
			visaExpiryDate: new Date(),
			docUploadStatus: 'uploaded',
			verificationRespValue: '99225050015847013486',
			addressType: 'ResidenceAddress',
			addressLine1: 'Baker Street',
			street: 'Street',
			city: 'Juba',
			state: 'SS',
			country: 'Zambia',
			postalCode: '567876',
			emailAddress: 'test@yopmail.com',
			alternateNo: '',
			emailPreferred: false,
			alternateNoPreferred: false,
			phonePreferred: true,
			productMomoStatus: 'true',
			channelId: 'isl',
			channelName: 'ISL',
			channelRole: 'interaction creation',
			channelReferredType: 'Channel',
			channelType: 'ISL'
			} as any
		);
		expect(returnObj.isTransformed).toBe(false);

	});

	it('should transform response object', () => {
		const serviceObj = new MadApiUpdateProfileService(apiLogModel);

		const responseObj = serviceObj.transformResponseDTO(MAD_API_UPDATE_PROFILE_RESPONSE);
		expect(responseObj.code).toBe(0);
	});

	it('should not transform response object', () => {
        const serviceObj = new MadApiUpdateProfileService(apiLogModel);
        const updateProfileDto: MadApiRequestDto = JSON.parse(JSON.stringify(dto));
        updateProfileDto.countryCode = '';

        const responseObj = serviceObj.transformResponseDTO(null);
		expect(responseObj.code).toBe(-1);
	});

	it('should save request payload', async () => {
		const serviceObj = new MadApiUpdateProfileService(apiLogModel);

		const result = await serviceObj.saveRequestPayload('uniqueId', dto, REQUEST_TYPE.MAD_API_UPDATE_PROFILE);
		expect(result).toBeTruthy();
	});

	it('should NOT save request payload', async () => {
		apiLogModel = jest.fn(() => ({}));
        const serviceObj = new MadApiUpdateProfileService(apiLogModel);

		const result = await serviceObj.saveRequestPayload('uniqueId', dto, REQUEST_TYPE.MAD_API_UPDATE_PROFILE);
		expect(result).toBeNull();
	});

	it('should return error on save response payload', async () => {
		const serviceObj = new MadApiUpdateProfileService(apiLogModel);
		const result = await serviceObj.saveResponsePayload({} as any, {});
		expect(result).toBeFalsy();
	});

	it('should calculate duration', () => {
		apiLogModel = jest.fn(() => ({
            save: jest.fn().mockResolvedValue({ uniqueId: 'uniqueId', msisdn: 'msisdn', startTime: new Date() }),
        }));
        const serviceObj = new MadApiUpdateProfileService(apiLogModel);

		const result = serviceObj.calculateDuration(new Date('06/27/1997 19:22:36'), new Date('06/27/1997 19:23:33'));
		expect(result).toBe(57);
	});

	it ('should return an error while calling update profile', async () => {

	    const serviceObj = new MadApiUpdateProfileService(apiLogModel);

		const authTokenResponse: IResponse = {
			status: -1,
			payload: '',
			msg: ''
		};

		jest.spyOn(serviceObj, 'generateAuthToken').mockResolvedValue(authTokenResponse);

		const requestPayload: MadApiRequestDto = {
	        ...dto
	    };

		const result = await serviceObj.integration(requestPayload);
		expect(result.status).toBe(-1);
	});

	// it ('should return a successful response for update profile', async () => {
	// 	const serviceObj = new MadApiUpdateProfileService(apiLogModel);

	// 	const authTokenResponse: IResponse = {
	// 		status: 0,
	// 		payload: '',
	// 		msg: ''
	// 	};

	// 	jest.spyOn(serviceObj, 'generateAuthToken').mockResolvedValue(authTokenResponse);

	// 	const requestPayload: MadApiRequestDto = {
	// 		...dto
	// 	};

	// 	requestPayload.apiUrl = "https://preprod.api.mtn.com/tmf-api/party/v4/individual";

	// 	const result = await serviceObj.integration(requestPayload);
	// 	expect(result.status).toBe(0);
	// });
});