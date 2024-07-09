import { ObjectId } from 'mongoose';
import { MadApiRequestDto } from '../dto/madapi-request.dto';
import { ResponseDto } from '../dto/response.dto';

export interface IMadApiUpdateProfile {

	transformRequestDTO(dto: MadApiRequestDto): unknown;

	transformResponseDTO(responsePayload: unknown): ResponseDto;

	saveRequestPayload(uniqueId: string, requestPayload: any, request: MadApiRequestDto);

	saveResponsePayload(responsePayload: any, uniqueId: string, documentId: ObjectId);

	integration(request: MadApiRequestDto);

}