import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';

@Component({
  selector: 'app-list-comentarios',
  imports: [],
  templateUrl: './list-comentarios.html',
  styleUrl: './list-comentarios.scss'
})
export class ListComentarios {
  listComentarios: Comentario[] = [];
}
