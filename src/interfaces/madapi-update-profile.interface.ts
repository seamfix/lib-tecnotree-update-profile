import { ObjectId } from 'mongoose';
import { MadApiRequestDto } from '../dto/madapi-request.dto';
import { ResponseDto } from '../dto/response.dto';

export interface IMadApiUpdateProfile {

	transformRequestDTO(dto: MadApiRequestDto): unknown;

	transformResponseDTO(responsePayload: any): ResponseDto;

	saveRequestPayload(requestPayload: any, dto: MadApiRequestDto, requestType: string);

	saveResponsePayload(responsePayload: any, uniqueId: string, documentId: ObjectId);

	integration(request: MadApiRequestDto);

}