import { Component } from '@angular/core';
import {NuevoComentarioComponent} from './nuevo-comentario/nuevo-comentario.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [NuevoComentarioComponent, NgIf, NgForOf],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comments: string[] = [];

  addComment(comment: string) {
    this.comments.push(comment);
  }
}
