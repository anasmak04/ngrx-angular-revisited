import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth.service";
import { map, switchMap } from "rxjs";
import { AuthActions } from "./auth.actions";
import { RegisterResponse } from "../models/register-response.interface";
import { LoginResponse } from "../models/login-response.interface";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService
  ) {}

  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.register),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((user: RegisterResponse) => 
            AuthActions.registerSuccess({ user })
          )
        )
      )
    )
  );


  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      switchMap(({ request }) =>
        this.authService.login(request).pipe(
          map((user: LoginResponse) => 
            AuthActions.loginSuccess({ user })
          )
        )
      )
    )
  );
}
