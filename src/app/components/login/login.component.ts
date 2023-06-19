import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  validacionIniciarsesion(): void {
    // Obtener los valores de los campos de correo y contraseña
    const correo = (<HTMLInputElement>document.getElementById('correo')).value;
    const contrasena = (<HTMLInputElement>document.getElementById('contrasena')).value;

    let comprobar = true;

    // Validar los campos de correo y contraseña
    if (correo.length < 1 || correo.trim() === '') {
      this.mensaje_error('correo', 'Correo incorrecto');
      comprobar = false;
    }  else if (!correo.includes('@')) {
      this.mensaje_error('correo', 'El correo debe contener un símbolo "@"');
      comprobar = false;
    }else {
      this.mensaje_error('correo', '');
    }

    if (contrasena.length < 1 || contrasena.trim() === '') {
      this.mensaje_error('contrasena', 'Contraseña incorrecta');
      comprobar = false;
    } else {
      this.mensaje_error('contrasena', '');
    }

    if (comprobar) {
      // Redirigir a la página deseada después de iniciar sesión
      this.router.navigate(['pagina1']);
    }
  }

  //Función para mostrar mensajes de error
  mensaje_error(nombreclase: string, texto: string): void {
    const elemento = document.querySelector(`.${nombreclase}`);
    if (elemento instanceof HTMLElement) {
      const mensajeElemento = elemento.querySelector('.mensajeError');
      if (mensajeElemento) {
        mensajeElemento.textContent = texto;
      }
    }
  }
}
