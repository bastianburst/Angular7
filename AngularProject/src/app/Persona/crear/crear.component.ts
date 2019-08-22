import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { PersonaModule } from '../persona.module';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  persona:PersonaModule=new PersonaModule();
  constructor(private router:Router, private service:ServiceService) { }
  
  ngOnInit() {

  }
  Save(){
    this.persona.activo = true;
    this.persona.libre = true;
    this.persona.pedido = false;
    console.log(this.persona);
    this.service.createPersona(this.persona).subscribe(data=>{
      alert("se guardó con exito");
      this.router.navigate(["listar"]);
    })

  }

}
