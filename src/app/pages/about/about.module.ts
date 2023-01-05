import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ResumenComponent } from './resumen/resumen.component';



@NgModule({
  declarations: [
    ContactoComponent,
    ProyectosComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactoComponent,
    ProyectosComponent,
    ResumenComponent
  ]
})
export class AboutModule { }
