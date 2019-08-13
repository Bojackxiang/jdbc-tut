import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { env } from '../../environments/env';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const requestURL = env.URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  login(user: User) {
    const body = JSON.stringify(user);
    return this.httpClient
      .post(requestURL, body, httpOptions)
      .pipe()

  }
}
