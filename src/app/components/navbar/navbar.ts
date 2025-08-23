import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  img = 'imagenes/logo_umg.png';

  constructor() {}

  ngOnInit() {
    // Código a ejecutar al inicializar el componente
  }
}
