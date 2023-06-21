import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PhoneComponent } from './phone/phone.component';
import { PropertiesComponent } from './properties/properties.component';
import { WhyXeneComponent } from './why-xene/why-xene.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HappyComponent } from './happy/happy.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';


@NgModule({
  declarations: [
    LandingComponent,
    BenefitsComponent,
    HeaderComponent,
    BodyComponent,
    PhoneComponent,
    PropertiesComponent,
    WhyXeneComponent,
    HowItWorksComponent,
    HappyComponent,
    RealEstateComponent,
    FooterComponent,
    ExploreComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
