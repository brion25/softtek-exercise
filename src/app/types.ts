import { Observable } from 'rxjs';

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  cell: string;
  email: string;
  phone: string;
  name: {
    first: string;
    last: string;
  };
  location: UserAddress;
  picture: UserPicture;
}

export interface JsonPlaceHolderInterface {
  getUsers(): Observable<any>;
}

export interface UserState {
  list: Array<User>;
}

export enum UserActionsEnum {
  SAVE_USERS = 'SAVE_USERS',
  GET_USERS = 'GET_USERS',
  LOAD_USERS = 'LOAD_USERS',
  GET_USER = 'GET_USER'
}
