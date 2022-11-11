import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PasajesComponent } from './pasajes/pasajes.component';
import { SalidasComponent } from './salidas/salidas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'pasajes',
    component: PasajesComponent
  },
  {
    path: 'salidas',
    component: SalidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
