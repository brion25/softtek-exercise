import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { selectUser } from '../store/selectors/user-selector';
import { User } from '../types';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private store$: Store<any>, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');

    this.store$.pipe(select(selectUser, id)).subscribe(user => (this.user = user));
  }

  goToList() {
    this.router.navigateByUrl('/');
  }
}
