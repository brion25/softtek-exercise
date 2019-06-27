import { Action } from '@ngrx/store';

import { UserActionsEnum, User } from '../../types';

export class GetUsers implements Action {
  public readonly type = UserActionsEnum.GET_USERS;
  constructor(public users: Array<User>) {}
}

export class LoadUsers implements Action {
  public readonly type = UserActionsEnum.LOAD_USERS;
}

export type UserActions = GetUsers;
