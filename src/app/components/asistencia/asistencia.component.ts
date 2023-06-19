import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {
  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["appventana"]);
  }
}
