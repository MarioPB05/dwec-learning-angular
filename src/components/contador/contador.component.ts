import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  // *-* Anotación *-*
  // Obtenemos la fecha en un primer momento,
  // para qué la fecha no de un salto de un valor vacío a uno con valor.
  // Ya que la función ngOnInit se ejecuta después de que el componente se inicializa (Puede haber delay).
  date: Date = new Date();
  hour: number = this.date.getHours();
  minute: number = this.date.getMinutes();
  second: number = this.date.getSeconds();
  interval: any;

  /**
   * Esta función se ejecuta cuando el componente se inicializa
   */
  ngOnInit() {
    // Creamos un intervalo que se va a ejecutar cada segundo
    this.interval = setInterval(() => {
      const date = new Date(); // Obtenemos la fecha actual
      this.hour = date.getHours(); // Obtenemos la hora a partir de la fecha anterior
      this.minute = date.getMinutes(); // Obtenemos también los minutos
      this.second = date.getSeconds(); // Obtenemos también los segundos
    }, 1000);
  }

  /**
   * Esta función se ejecuta cuando el componente se destruye
   */
  ngOnDestroy() {
    this.stopInterval();
  }

  stopInterval() {
    clearInterval(this.interval); // Limpiamos el intervalo
  }

}
