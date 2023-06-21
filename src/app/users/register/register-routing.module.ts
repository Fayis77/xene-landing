import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAvailComponent } from './account-avail/account-avail.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'user-register',component:UserRegisterComponent},
  {path:'user-avail',component:AccountAvailComponent},
  {path:'invitation',component:InvitationComponent},
  {path:'login',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
