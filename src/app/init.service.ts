import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadUsers } from './store/actions/user-actions';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(private store$: Store<any>) {}

  init() {
    this.store$.dispatch(new LoadUsers());
  }
}

export const AppInitializer = (initService: InitService) => () => initService.init();
