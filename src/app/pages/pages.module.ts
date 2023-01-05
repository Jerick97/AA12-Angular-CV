import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    InformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    InformationComponent
  ]
})
export class PagesModule { }
