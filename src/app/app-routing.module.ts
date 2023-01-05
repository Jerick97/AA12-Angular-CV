import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/about/contacto/contacto.component';
import { ProyectosComponent } from './pages/about/proyectos/proyectos.component';
import { ResumenComponent } from './pages/about/resumen/resumen.component';
import { HomeComponent } from './pages/home/home.component';

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
