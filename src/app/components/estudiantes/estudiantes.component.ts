import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

// Definir la interfaz Estudiante
interface Estudiante {
  numero: number; // Número de estudiante
  cedula: string; // Cédula del estudiante
  nombres: string; // Nombres del estudiante
  asistencia: boolean; // Estado de asistencia
  inasistencia: boolean; // Estado de inasistencia
  justificado?: boolean; // Estado de justificación (opcional)
}

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = []; // Arreglo para almacenar los estudiantes
  nuevoEstudiante: Estudiante = { // Objeto para capturar los datos del estudiante a agregar
    numero: 0,
    cedula: '',
    nombres: '',
    asistencia: false,
    inasistencia: false
  };

  constructor(private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["appventana"]);
  }

  ngOnInit(): void {
    this.cargarEstudiantes(); // Cargar los estudiantes al inicializar el componente
  }

  cargarEstudiantes(): void {
    // Obtener los estudiantes desde el almacenamiento local
    const estudiantesData = localStorage.getItem('estudiantes');
    if (estudiantesData) {
      this.estudiantes = JSON.parse(estudiantesData);
    } else {
      // Datos de ejemplo si no hay estudiantes almacenados
      this.estudiantes = [
        {
          numero: 1,
          cedula: '1111111111',
          nombres: 'Juan Perez',
          asistencia: true,
          inasistencia: false
        },
        {
          numero: 2,
          cedula: '2222222222',
          nombres: 'Maria Lopez',
          asistencia: false,
          inasistencia: true
        }
      ];
      this.guardarEstudiantes(); // Guardar los estudiantes en el almacenamiento local
    }
  }

  guardarEstudiantes(): void {
    // Guardar los estudiantes en el almacenamiento local
    localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
  }

  agregarEstudiante(): void {
    // Validar la longitud de la cédula
    if (this.nuevoEstudiante.cedula.length !== 10) {
      alert('La cédula debe tener 10 caracteres.');
      return;
    }
      // Validar si la cédula ya existe
    if (this.estudiantes.some(estudiante => estudiante.cedula === this.nuevoEstudiante.cedula)) {
      alert('Ya existe un estudiante con esta cédula.');
      return;
    }


    // Agregar un nuevo estudiante al arreglo de estudiantes
    this.nuevoEstudiante.numero = this.estudiantes.length + 1;
    this.estudiantes.push({ ...this.nuevoEstudiante });

    // Limpiar los campos del formulario
    this.nuevoEstudiante.cedula = '';
    this.nuevoEstudiante.nombres = '';
    this.nuevoEstudiante.asistencia = false;
    this.nuevoEstudiante.inasistencia = false;

    this.guardarEstudiantes(); // Guardar los estudiantes en el almacenamiento local
  }

  eliminarEstudiante(numero: number): void {
    // Eliminar un estudiante del arreglo de estudiantes
    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.numero !== numero);
    this.guardarEstudiantes(); // Guardar los estudiantes en el almacenamiento local
  }

  justificarEstudiante() {
    // Justificar la asistencia de un estudiante y mostrar una alerta
    alert('Estudiante justificado correctamente.');
  }
}






