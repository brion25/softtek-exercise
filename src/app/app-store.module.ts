import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './store/reducers/user-reducer';

@NgModule({
  imports: [StoreModule.forRoot({ users: userReducer })],
  exports: [StoreModule]
})
export class AppStoreModule {}
