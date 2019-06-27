import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonPlaceHolderInterface } from './types';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements JsonPlaceHolderInterface {
  private BASE_URL = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.BASE_URL}/?results=10`);
  }
}
