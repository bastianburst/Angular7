import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { PersonaModule } from '../persona.module';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  persona: PersonaModule;
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.getPersona();
  }
  //método para traer la persona a editar
  getPersona() {
    //let id2 = this.service.personaID.id;
    //console.log(id2);
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Update(persona:PersonaModule){
    this.service.updatePersona(persona).subscribe(data=>{
      this.persona = data;
      alert("Se actualizó con exito");
      this.router.navigate(["listar"]);
    })
  }

}
