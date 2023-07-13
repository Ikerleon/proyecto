import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EstadoComponent } from './components/estado/estado.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pagina1', component:Pagina1Component},
  {path: 'registro', component:RegistroComponent},
  {path:'estado', component:EstadoComponent},
  {path:'estudiantes', component:EstudiantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
