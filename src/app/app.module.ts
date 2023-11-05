import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminDashComponent } from './AdminComponents/admin-dash/admin-dash.component';
import { AddFilmComponent } from './AdminComponents/add-film/add-film.component';
import { EditFilmComponent } from './AdminComponents/edit-film/edit-film.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminDashComponent,
    AddFilmComponent,
    EditFilmComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
