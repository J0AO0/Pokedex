import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//module routing
import { RoutingModule } from './routing.module';

//module
import { SharedModule } from '../shared/shared.module';

//pages
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
