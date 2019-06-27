import { createSelector, createFeatureSelector } from '@ngrx/store';

import { UserState, User } from '../../types';

export const selectUserFeature = createFeatureSelector<any>('users');

export const selectUsers = createSelector(
  selectUserFeature,
  (state: UserState) =>
    state.list.map((user: User) => ({
      id: user.cell,
      firstName: user.name.first,
      lastName: user.name.last,
      picture: user.picture.thumbnail
    }))
);

export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState, id: string) => state.list.find((user: User) => user.cell === id)
);
