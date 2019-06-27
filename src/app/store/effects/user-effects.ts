import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UsersService } from '../../users.service';
import { GetUsers } from '../actions/user-actions';
import { UserActionsEnum, User } from '../../types';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionsEnum.LOAD_USERS),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(map((data: any) => new GetUsers(data.results as Array<User>), catchError(() => EMPTY)))
      )
    )
  );

  constructor(private actions$: Actions, private userService: UsersService) {}
}
