import { IsDate, IsDefined, IsObject, IsOptional, IsString, isString } from "class-validator";

export class MadApiRequestDto {

    @IsString()
    authUrl: string;

    @IsString()
    authClientId: string;

    @IsString()
    authClientSecret: string;

    @IsString()
    authGrantType: string;

    @IsDefined()
    @IsString()
    apiUrl: string;

    @IsDefined()
    @IsString()
    uniqueId: string;

    @IsDefined()
    @IsString()
    msisdn: string;

    @IsDefined()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    middleName?: string;

    @IsDefined()
    @IsString()
    lastName: string;

    @IsDefined()
    @IsDate()
    dob: Date;

    @IsDefined()
    @IsString()
    nationality: string;

    @IsDefined()
    @IsString()
    idNumber: string;

    @IsDefined()
    @IsString()
    idType: string;

    @IsDefined()
    @IsDate()
    idExpiryDate: Date;

    @IsDefined()
    @IsDate()
    idIssueDate: Date;

    @IsDefined()
    @IsString()
    idIssuePlace: string;

    @IsOptional()
    @IsDate()
    visaExpiryDate: Date;

    @IsDefined()
    @IsString()
    docUploadStatus: string;

    @IsDefined()
    @IsString()
    verificationRespValue: string;

    @IsOptional()
    @IsString()
    addressType: string;

    @IsOptional()
    @IsString()
    addressLine1: string;

    @IsOptional()
    @IsString()
    addressLine2?: string;

    @IsOptional()
    @IsString()
    street: string;

    @IsDefined()
    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    state: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    postalCode?: string;

    @IsDefined()
    @IsString()
    emailAddress: string;

    @IsDefined()
    @IsString()
    alternateNo: string;

    @IsOptional()
    emailPreferred: boolean;

    @IsOptional()
    alternateNoPreferred: boolean;

    @IsOptional()
    phonePreferred: boolean;

    @IsOptional()
    productMomoStatus: boolean;

    @IsOptional()
    @IsString()
    channelId: string;

    @IsOptional()
    @IsString()
    channelName: string;

    @IsOptional()
    @IsString()
    channelRole: string;

    @IsOptional()
    @IsString()
    channelReferredType: string;

    @IsOptional()
    @IsString()
    channelType: string;

    @IsDefined()
    @IsString()
    countryCode: string;

    @IsDefined()
    @IsString()
    transactionId: string;
}