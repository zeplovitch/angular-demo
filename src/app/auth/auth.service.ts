import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //
  signup(email: string, password: string): Observable<AuthResponseData> {
    const request = {
      email,
      password,
      returnSecureToken: true
    };
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2-mPeEq1MqQ6OHs-ERobnIYROt5oeKYU';
    return this.http.post<AuthResponseData>(url, request);
  }
}
