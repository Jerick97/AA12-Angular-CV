import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InformationComponent } from '../information/information.component';
import { SkillsComponent } from '../skills/skills.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoModule } from './contacto/contacto.module';



@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactoModule
  ],
  exports: [
    InformationComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
