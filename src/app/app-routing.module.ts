import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PasajesComponent } from './pasajes/pasajes.component';
import { SalidasComponent } from './salidas/salidas.component';
import { TicketComponent } from './ticket/ticket.component';

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
  },
  {
    path: 'ticket',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
