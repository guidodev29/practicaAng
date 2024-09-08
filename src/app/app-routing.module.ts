import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraComponent} from "./components/calculadora/calculadora.component";
import {AppComponent} from "./app.component";
import {Practica2Component} from "./pages/practica2/practica2.component";
import {Practica1Component} from "./pages/practica1/practica1.component";


const routes: Routes = [
  { path: 'pages/practica-2', component: Practica2Component },  // Route to CalculadoraComponent
  { path: 'pages/practica-1', component: Practica1Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
