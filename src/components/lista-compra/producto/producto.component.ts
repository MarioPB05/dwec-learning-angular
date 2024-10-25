import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Producto} from '../../productos/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  @Input({required: true}) producto!: Producto;
  @Output() productoAgregado: EventEmitter<Producto> = new EventEmitter<Producto>();

  agregarProducto(producto: Producto): void {
    this.productoAgregado.emit(producto);
  }
}
