import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { CrearComponent } from './Persona/crear/crear.component';
import { EditarComponent } from './Persona/editar/editar.component';
const routes: Routes = [
{path:'listar', component:ListarComponent},
{path:'crear', component:CrearComponent},
{path:'editar', component:EditarComponent}
];
//Agregamos los componentes que debe cargar al llegar a la ruta
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
