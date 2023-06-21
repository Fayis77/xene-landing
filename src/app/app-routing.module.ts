import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 
 
  {
    path:'',redirectTo:'landing',pathMatch: 'full'
  },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
 



  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
