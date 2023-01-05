import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    InformationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    InformationComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
