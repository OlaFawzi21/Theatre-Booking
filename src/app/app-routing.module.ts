import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashComponent } from './AdminComponents/admin-dash/admin-dash.component';
import { AddFilmComponent } from './AdminComponents/add-film/add-film.component';
import { EditFilmComponent } from './AdminComponents/edit-film/edit-film.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"register" , component: RegisterComponent},
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: AdminDashComponent },
  { path: "dashboard/addFilm", component: AddFilmComponent },
  { path: "dashboard/editFilm/:id", component: EditFilmComponent },
  { path: "", component: LoginComponent },
  { path: "**", component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
