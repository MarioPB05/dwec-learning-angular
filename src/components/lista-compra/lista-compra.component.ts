import { Component } from '@angular/core';
import {Producto} from '../productos/producto';
import {NgForOf, NgIf} from '@angular/common';
import {ProductoComponent} from './producto/producto.component';
import {ProductoCarrito} from './producto-carrito';

@Component({
  selector: 'app-lista-compra',
  standalone: true,
  imports: [
    NgForOf,
    ProductoComponent,
    ProductoComponent,
    NgIf
  ],
  templateUrl: './lista-compra.component.html'
})
export class ListaCompraComponent {
  productos: Producto[] = [{
    id: 1,
    nombre: '1KG de Tomates',
    descripcion: 'Tomates recién traídos de la costa africana.',
    precio: 5.60,
    imagen: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/02/10/tomates.jpeg'
  }, {
    id: 2,
    nombre: '1KG de Patatas',
    descripcion: 'Patatas de la huerta de mi abuela.',
    precio: 2.30,
    imagen: 'https://fotografias.larazon.es/clipping/cmsimages01/2024/03/19/E7CCA93C-809C-4E43-BD8F-63842812A553/patatas-son-sensibles-etileno-hormona-vegetal-que-acelera-maduracion_98.jpg?crop=1280,720,x0,y88&width=1900&height=1069&optimize=low&format=webply'
  }, {
    id: 3,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }, {
    id: 3,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }, {
    id: 3,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }];

  carrito: ProductoCarrito[] = [
    {
      id: 1,
      producto: this.productos[0],
      cantidad: 1
    },
    {
      id: 1,
      producto: this.productos[4],
      cantidad: 2
    }
  ];

  increaseQuantity(producto: ProductoCarrito) {
    producto.cantidad++;
  }

  decreaseQuantity(producto: ProductoCarrito) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }else {
      this.carrito = this.carrito.filter(p => p !== producto);
    }
  }

  foundInCart(producto: Producto): ProductoCarrito | undefined {
    return this.carrito.find(p => p.producto.id === producto.id);
  }

  addProductToCart(producto: Producto): void {
    this.carrito.push({
      id: this.carrito.length + 1,
      producto: producto,
      cantidad: 1
    });
  }

  addProduct(producto: Producto): void {
    if (this.foundInCart(producto)) {
      this.increaseQuantity(this.foundInCart(producto)!);
    }else {
      this.addProductToCart(producto);
    }
  }

  calculateTotalProduct(producto: ProductoCarrito): string {
    return (producto.producto.precio * producto.cantidad).toFixed(2);
  }

  calculateTotal(): string {
    return this.carrito.reduce((acc, p) => acc + p.producto.precio * p.cantidad, 0).toFixed(2);
  }

}
