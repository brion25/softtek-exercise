import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadUsers } from '../store/actions/user-actions';
import { selectUsers } from '../store/selectors/user-selector';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: Array<string> = ['thumbnail', 'firstName', 'lastName'];
  users = new MatTableDataSource([]);

  constructor(private store$: Store<any>) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.store$.pipe(select(selectUsers)).subscribe(users => {
      this.users = new MatTableDataSource(users);
      this.users.sort = this.sort;
    });
  }
}
