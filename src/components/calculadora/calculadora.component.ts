import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  number1: number = 0;
  number2: number = 0;

  sum(): void {
    let total = 0;

    if (Number.isNaN(this.number1) || Number.isNaN(this.number2) || this.number1 === null || this.number2 === null) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los valores ingresados no son números'
      });

      return;
    }

    total = Number(this.number1) + Number(this.number2);

    Swal.fire({
      icon: 'success',
      title: 'Resultado',
      text: `La suma de ${this.number1} + ${this.number2} es ${total}`
    });
  }

}
