import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/home/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/home/proyectos/proyectos.component';
import { ResumenComponent } from './pages/home/resumen/resumen.component';

const routes: Routes = [
  {path: '', component:HomeComponent,
    children: [
      {path:'contacto' , component:ContactoComponent},
      {path:'proyectos', component:ProyectosComponent},
      {path:'resumen', component:ResumenComponent}
    ]
}, //redireccionar al Home
  {path: '**', pathMatch:'full',redirectTo:'home'}//Cualquier url redirija al Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
