import { User } from "./user";

export interface RegisterRequest{
    name : string,
    email : string,
    password : string,
    password_confirmation : string,
}