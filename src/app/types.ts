import { Observable } from 'rxjs';

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates?: {
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
