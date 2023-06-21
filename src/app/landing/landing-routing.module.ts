import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './benefits/benefits.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [{ path: '', component: LandingComponent },
{path:"benefit",component:BenefitsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
