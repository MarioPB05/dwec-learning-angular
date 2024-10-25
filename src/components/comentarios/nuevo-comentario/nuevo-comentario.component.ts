import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './nuevo-comentario.component.html',
  styleUrl: './nuevo-comentario.component.css'
})
export class NuevoComentarioComponent {
  comment: string = '';
  @Output() onNewComment: EventEmitter<string> = new EventEmitter();

  saveComment() {
    if (!this.comment || this.comment.trim()) return;
    this.onNewComment.emit(this.comment);
    this.comment = '';
  }
}
