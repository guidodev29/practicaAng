import { Component } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component {
  title = 'oneWayBindingUFG';
  tituloAEnviar = 'Titulo enviado desde el padre al hijo';
  mensajeARecivir: string = ''

  handleDataFromChild(mensaje: string) {
    this.mensajeARecivir = mensaje;
  }

}
