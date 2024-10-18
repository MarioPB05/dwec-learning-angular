import { Component } from '@angular/core';
import {ProductoComponent} from './producto/producto.component';
import {NgForOf} from '@angular/common';
import {Producto} from './producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    ProductoComponent,
    NgForOf
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
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
    id: 1,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }, {
    id: 1,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }, {
    id: 1,
    nombre: '1KG de Berenjenas',
    descripcion: 'Berenjenas recién traídas de la costa subsahariana.',
    precio: 5.60,
    imagen: 'https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg'
  }];
}
