import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
