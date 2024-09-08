import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import { Practica2Component } from './pages/practica2/practica2.component';
import { Practica1Component } from './pages/practica1/practica1.component';
import { CalculadoraOneWayComponent } from './components/calculadora-one-way/calculadora-one-way.component';
import { CompaComponent } from './components/compa/compa.component';
import { CompbComponent } from './components/compb/compb.component';
import { HalaMadridComponent } from './components/hala-madrid/hala-madrid.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    Practica2Component,
    Practica1Component,
    CalculadoraOneWayComponent,
    CompaComponent,
    CompbComponent,
    HalaMadridComponent,
    ProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,  // Add this
    MatMenuModule,    // Add this
    MatDividerModule  // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
