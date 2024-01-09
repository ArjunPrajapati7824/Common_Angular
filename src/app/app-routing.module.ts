import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
  path:'country',
  component:CountryComponent
  },

  {
    path : 'login',
    component:LoginComponent
  },

  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'userlist',
    component:UserlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
