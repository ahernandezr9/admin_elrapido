import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalidasComponent } from './salidas/salidas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PasajesComponent } from './pasajes/pasajes.component';
import {HttpClientModule} from  '@angular/common/http';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SalidasComponent,
    InicioComponent,
    PasajesComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
