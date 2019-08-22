import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModule } from '../Persona/persona.module';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/Sigecutac/webresources/caddies";
  getPersonas(){
    return this.http.get<PersonaModule[]>(this.Url);
    //Tambien podria ser asi  return this.http.get(this.Url);
  }
  createPersona(persona:PersonaModule){
    console.log("desde el service");
    console.log(persona);
    return this.http.post<PersonaModule>(this.Url, persona);
    //Tambien podria ser asi  return this.http.get(this.Url);
  }
  //Método para buscar persona por id
  getPersonaId(idCaddie:number){
    return this.http.get<PersonaModule>(this.Url+"/"+idCaddie);
  }
  //Método editar
  updatePersona(persona:PersonaModule){
    return this.http.put<PersonaModule>(this.Url+"/"+persona.idCaddie,persona);
  }
  //Método eliminar
  deletePersona(persona:PersonaModule){
    return this.http.delete<PersonaModule>(this.Url+"/"+ persona.idCaddie);
  }

  //Esto no sirve en esta versión
  personaID = {
    id:""
  };
}
