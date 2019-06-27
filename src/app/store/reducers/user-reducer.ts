import { UserActionsEnum, UserState } from '../../types';
import { UserActions } from '../actions/user-actions';
import { initialUserState } from '../state/user-state';

export const userReducer = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    default:
      return state;
    case UserActionsEnum.GET_USERS:
      return {
        ...state,
        list: action.users
      };
  }
};
