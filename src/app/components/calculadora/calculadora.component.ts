import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Input()
  tituloARecibir: string = '';

  @Output() dataChanged = new EventEmitter<string>();

  constructor() {}

  sumameEsta() {
    this.resultado = this.num1+this.num2
  }

  notificarAlPadre() {
    const mensaje: string = "Mensaje enviado desde el componente hijo al padre"
    this.dataChanged.emit(mensaje);
  }
}
