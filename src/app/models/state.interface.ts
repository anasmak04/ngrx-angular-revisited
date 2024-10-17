import { LoginResponse } from "./login-response.interface";
import { RegisterResponse } from "./register-response.interface";

export interface UserState {
    user : RegisterResponse  | LoginResponse | null
}