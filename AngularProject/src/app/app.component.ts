import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//Aqui definimos la plantilla html que se va a cargar al llegar a la ruta
export class AppComponent {
  title = 'AngularProject';

  constructor(private router:Router){}
//Este es el metodo que tiene el botón, poenemos el nombre que pusimos en el enrutamiento
//el nombre debe ser igual al puesto en app-routing.component.ts
//aqui simplemente estamos creando los metodos en el modulo del compoennte component,html que es el que carga al principio
    Listar(){
      this.router.navigate(["listar"]);
    }
    
    Nuevo(){
      this.router.navigate(["crear"]);
    }

  
}
