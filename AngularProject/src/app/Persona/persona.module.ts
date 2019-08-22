import { NgModule, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PersonaModule {
  idCaddie:number;
  nombre:String;
  apellido:String;
  id:String;
  telcaddie:String;
  libre:Boolean = true;
  activo:Boolean = true;
  pedido:Boolean = false;
 }
