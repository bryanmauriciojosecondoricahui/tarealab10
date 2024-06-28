import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Definir la función onSubmit
  constructor(){}
  
  onSubmit() {
    // Aquí puedes agregar la lógica que deseas ejecutar cuando se envía el formulario
    console.log('Formulario enviado');
  }
}
