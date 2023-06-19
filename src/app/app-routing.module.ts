import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pagina1', component:Pagina1Component},
  {path: 'registro', component:RegistroComponent},
  {path:'asistencia', component:AsistenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
