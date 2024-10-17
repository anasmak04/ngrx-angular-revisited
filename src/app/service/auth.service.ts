import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../models/register-request.interface';
import { RegisterResponse } from '../models/register-response.interface';
import { LoginRequest } from '../models/login-request.interface';
import { LoginResponse } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   auth : string = environment.auth

  constructor(private http : HttpClient) { }

  register(user : RegisterRequest) : Observable<RegisterResponse>{
   return this.http.post<RegisterResponse>(`${this.auth}/register`, user);
  }

  login(user : LoginRequest) : Observable<LoginResponse>{
      return this.http.post<LoginResponse>(`${this.auth}/login`,user);
  }

}
