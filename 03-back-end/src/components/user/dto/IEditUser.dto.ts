import Ajv from "ajv";
import addFormats from "ajv-formats";
import IServiceData from '../../../common/IServiceData.interface';


const ajv = new Ajv();
addFormats(ajv);

export default interface IEditUser extends IServiceData {
    password_hash?: string;
    is_active?: number;
    forename?: string;
    surname?: string;
    city?:string;
    phone_number?: string;
    activation_code?: string;
    
    
}

export interface IEditUserDto {
    password?: string;
    isActive?: boolean;
    forename?: string;
    surname?: string;
    city?:string;
    phoneNumber?: string;
}

const EditUserValidator = ajv.compile({
    type: "object",
    properties: {
        password: {
            type: "string",
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$",
        },
        forename: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        surname: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        city: {
            type: "string",
            minLength: 2,
            maxLength: 64,
        },
        phoneNumber: {
            type: "string",
            minLength: 0,
            maxLength: 24,
        },
        isActive: {
            type:"boolean"
        }
    },
    required: [
        
    ],
    additionalProperties: false,
});

export {EditUserValidator};