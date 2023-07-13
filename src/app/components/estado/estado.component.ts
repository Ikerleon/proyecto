import { Component } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  tablaData = [
    {
      titulo1: 'N°',
      titulo2: 'Cedula',
      titulo3: 'Nombres de estudiante',
      titulo4: 'Correo institucional',
      titulo5: 'N°_justificaciones'
    },
    {
      celda1: '1',
      celda2: '1752244861',
      celda3: 'JIMMY SANTIAGO ALVARADO CHAVEZ',
      celda4: 'e1752244861@live.uleam.edu.ec',
      celda5: '1'
    },
    {
      celda1: '2',
      celda2: '1314613777',
      celda3: 'JAMILETH ESTELA ANCHUNDIA ANCHUNDIA',
      celda4: 'e1314613777@live.uleam.edu.ec',
      celda5: '2'
    },
    {
      celda1: '3',
      celda2: '1317829073',
      celda3: 'FRANKLIN JOSTIN BAILON PALMA',
      celda4: 'e1317829073@live.uleam.edu.ec',
      celda5: '3'
    },
    {
      celda1: '4',
      celda2: '1314929025',
      celda3: 'MARCOS ENRIQUE BARCIA FALCONI',
      celda4: 'e1314929025@live.uleam.edu.ec',
      celda5: '1'
    },
    {
      celda1: '5',
      celda2: '1345627833',
      celda3: 'MIKE YEREMI BELLO ALONZO',
      celda4: 'e1316619897@live.uleam.edu.ec',
      celda5: '2'
    },
    {
      celda1: '6',
      celda2: '1351446651',
      celda3: 'ROBINSON MIGUEL BENITEZ SOZA',
      celda4: 'e1351446651@live.uleam.edu.ec',
      celda5: '2'
    }
  ];

  tablaData2 = [
    {
      titulo1: 'N°',
      titulo2: 'Cedula',
      titulo3: 'Nombres de estudiante',
      titulo4: 'Correo institucional',
      titulo5: 'N°_inasistencia'
    },
    {
      celda1: '1',
      celda2: '1752244861',
      celda3: 'JIMMY SANTIAGO ALVARADO CHAVEZ',
      celda4: 'e1752244861@live.uleam.edu.ec',
      celda5: '1'
    },
    {
      celda1: '2',
      celda2: '1314613777',
      celda3: 'JAMILETH ESTELA ANCHUNDIA ANCHUNDIA',
      celda4: 'e1314613777@live.uleam.edu.ec',
      celda5: '2'
    },
    {
      celda1: '3',
      celda2: '1314929025',
      celda3: 'MARCOS ENRIQUE BARCIA FALCONI',
      celda4: 'e1314929025@live.uleam.edu.ec',
      celda5: '1'
    },
    {
      celda1: '4	',
      celda2: '1317829073',
      celda3: 'FRANKLIN JOSTIN BAILON PALMA',
      celda4: 'e1317829073@live.uleam.edu.ec',
      celda5: '3'
    }
  ];

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getObjectValues(obj: any): any[] {
    return Object.values(obj);
  }
}
