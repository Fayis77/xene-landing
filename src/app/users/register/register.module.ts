import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountAvailComponent } from './account-avail/account-avail.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
  
    UserRegisterComponent,
       AccountAvailComponent,
       InvitationComponent,
       LoginComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatInputModule,
    MatFormFieldModule,
  ],exports:[
    MatInputModule,
    MatFormFieldModule, 
  ]
})
export class RegisterModule { }
