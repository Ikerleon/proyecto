import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private router: Router) { }
   /**
   * Función de validación del registro
   */
  validacionRegistro(): void {
    // Obtener los valores de los campos de nombre, correo, contraseña, repetir contraseña y términos y condiciones
    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const email = (<HTMLInputElement>document.getElementById("correo")).value;
    const contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;
    const repetircontrasena = (<HTMLInputElement>document.getElementById("repe_contrasena")).value;
    const terminos_condiciones = (<HTMLInputElement>document.getElementById("terminosycondiciones")).checked;

    let comprobar = true;

    // Validar el campo de nombre
    if (nombre.length < 1) {
      this.mensaje_error("nombre", "Nombre incorrecto");
      comprobar = false;
    } else {
      this.mensaje_error("nombre", "");
    }
    
    // Validar el campo de correo
    if (email.length < 1 || email.trim() == "") {
      this.mensaje_error("correo", "Correo incorrecto");
      comprobar = false;
    }else if (!email.includes('@')) {
      this.mensaje_error('correo', 'El correo debe contener un símbolo "@"');
      comprobar = false;
    } else {
      this.mensaje_error("correo", "");
    }

    // Validar el campo de contraseña
    if (contrasena.length < 1 || contrasena.trim() == "") {
      this.mensaje_error("contrasena", "Contraseña incorrecta");
      comprobar = false;
    } else {
      this.mensaje_error("contrasena", "");
    }

    // Validar el campo de repetir contraseña
    if (repetircontrasena != contrasena || repetircontrasena.trim() == "") {
      this.mensaje_error("repe_contrasena", "Las contraseñas no coinciden");
      comprobar = false;
    } else {
      this.mensaje_error("repe_contrasena", "");
    }

    // Validar el campo de términos y condiciones
    if (!terminos_condiciones) {
      this.mensaje_error("terminosycondiciones", "Acepte los términos");
      comprobar = false;
    } else {
      this.mensaje_error("terminosycondiciones", "");
    }


    if (comprobar) {
       // Redirigir a la página de inicio de sesión después de un registro exitoso
      this.router.navigate(['login']);
    }
  }
  //Función para mostrar mensajes de error
  mensaje_error(nombreclase: string, texto: string) {
    const elemento = document.querySelector(`.${nombreclase}`);
    if (elemento instanceof HTMLElement) {
      const mensajeElemento = elemento.querySelector('.mensajeError');
      if (mensajeElemento) {
        mensajeElemento.textContent = texto;
      }
    }
  }
}
