import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InformationComponent } from '../information/information.component';
import { SkillsComponent } from '../skills/skills.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ResumenComponent } from './resumen/resumen.component';



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
