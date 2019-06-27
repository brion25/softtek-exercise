import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngrx/store';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppEffectsModule } from './app-effects.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AppInitializer, InitService } from './init.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, UserTableComponent, UserDetailComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    AppEffectsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSortModule,
    MatButtonModule,
    LeafletModule
  ],
  providers: [
    InitService,
    { provide: APP_INITIALIZER, useFactory: AppInitializer, deps: [InitService, Store], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
