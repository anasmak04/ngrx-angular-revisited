import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterResponse } from "../models/register-response.interface";
import { RegisterRequest } from "../models/register-request.interface";
import { LoginRequest } from "../models/login-request.interface";
import { LoginResponse } from "../models/login-response.interface";

export const AuthActions = createActionGroup({
  source: 'auth',
  events: {
    "Register": props<{ request: RegisterRequest }>(),
    "Register Success": props<{ user: RegisterResponse }>(),
    "Register Failure": emptyProps(),

    "Login": props<{ request: LoginRequest }>(), 
    "Login Success": props<{ user: LoginResponse }>(),
    "Login Failure": emptyProps(),
  }
});
