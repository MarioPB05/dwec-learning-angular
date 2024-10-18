import {Component, Input} from '@angular/core';
import {Producto} from '../producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input({required: true}) producto!: Producto;
}
