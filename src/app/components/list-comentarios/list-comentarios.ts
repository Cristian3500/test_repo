import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-comentarios',
  imports: [RouterLink],
  templateUrl: './list-comentarios.html',
  styleUrl: './list-comentarios.scss'
})
export class ListComentarios {
  listComentarios: Comentario[] = [
    { titulo: 'Comentario 1', creador: 'Usuario 1', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-01') },
    { titulo: 'Comentario 2', creador: 'Usuario 2', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-02') },
    { titulo: 'Comentario 3', creador: 'Usuario 3', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-03') }
  ];

}
