import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InformationComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
