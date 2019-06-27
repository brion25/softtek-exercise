import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { UsersService } from '../users.service';
import { User } from '../types';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: Array<string> = ['thumbnail', 'firstName', 'lastName'];
  users = new MatTableDataSource([]);

  constructor(private placeholderService: UsersService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.users.sort = this.sort;

    this.placeholderService.getUsers().subscribe((data: any) => {
      const users: Array<User> = data.results;
      console.log(users);
      this.users = new MatTableDataSource(
        users.map(user => ({
          firstName: user.name.first,
          lastName: user.name.last,
          picture: user.picture.thumbnail
        }))
      );
      this.users.sort = this.sort;
    });
  }
}
