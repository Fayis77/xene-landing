import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';


const routes: Routes = [{ path: '', component: UsersComponent },
{ path: 'register', loadChildren: () => import('./register/register-routing.module').then(m => m.RegisterRoutingModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class UsersRoutingModule { }
