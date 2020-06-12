import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usr: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private router: Router, private http: HttpClient) {}

  addUser(user: any) {
    return this.http.post<any>(endpoint + 'users', user);
  }

  login(user) {
    return this.http.post<any>(endpoint + 'login', user);
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

  logout() {
    this.usr = '';
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    return this.http.get(endpoint + 'logout');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    this.usr = localStorage.getItem('idUser');
    console.log('this.usr: ' + this.usr);
    return this.usr;
  }
}
