import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { RegisterComponent } from './register/register.component';
import { UsdInrPipe } from './register/pipes/usd-inr.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { RedColorElementDirective } from './register/red-color-element.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsdInrPipe,
    RedColorElementDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UserAuthModule { }
