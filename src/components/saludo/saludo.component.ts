import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})

export class SaludoComponent {
  @Input() nombre: string = 'Mundo';

  constructor(private route: ActivatedRoute) {
    // Accedemos al data de la ruta
    this.route.data.subscribe((data) => {
      this.nombre = data['nombre'];
    });
  }
}
