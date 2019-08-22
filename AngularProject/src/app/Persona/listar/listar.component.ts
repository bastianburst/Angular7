import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { PersonaModule } from '../persona.module';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
//aqui creamos una variable persona que es una isntancia del modelo PersonaModule que ya importamos

  personas=[];
//Tambien podria ser asi personas = [], creando un array de personas sin necesidad de llamar el modulo PersonaModule

  //aqui creamos un constructor con el service y la ruta
  constructor(private service:ServiceService, private router:Router) { }
//aqui creamos el metodo para listar de la BD
  ngOnInit() {
    this.service.getPersonas().subscribe(data=>{
      //this.personas es donde se almacenarán los datos y es lo que se pone en el ngFor
      this.personas = data;
      console.log(data);
    });
  }

  goToEdit(persona:PersonaModule, service:ServiceService):void{
    //Por local storage
    localStorage.setItem("id", persona.idCaddie.toString());
    //Por service no se puede
    //service.personaID.id = persona.idCaddie.toString();
    this.router.navigate(["editar"]);

  }

  Delete(persona:PersonaModule){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas = this.personas.filter(p=>p!==persona);
      alert("Eliminado");
    }) 
  }
}
