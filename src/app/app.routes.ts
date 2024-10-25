import { Routes } from '@angular/router';
import { SaludoComponent } from '../components/saludo/saludo.component';
import { HomeComponent } from '../components/home/home.component';
import { ContadorComponent } from '../components/contador/contador.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TemporizadorComponent } from '../components/temporizador/temporizador.component';
import { ComentariosComponent } from '../components/comentarios/comentarios.component';
import { ProductosComponent } from '../components/productos/productos.component';
import { CalculadoraComponent } from '../components/calculadora/calculadora.component';
import {ListaCompraComponent} from '../components/lista-compra/lista-compra.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercise-1', component: SaludoComponent, data: {nombre: 'Mario Perdiguero Barrera'} },
  { path: 'exercise-2', component: ContadorComponent },
  { path: 'exercise-3', component: TaskListComponent },
  { path: 'exercise-4', component: TemporizadorComponent },
  { path: 'exercise-5', component: ComentariosComponent },
  { path: 'exercise-6', component: ProductosComponent },
  { path: 'exercise-7', component: CalculadoraComponent },
  { path: 'exercise-8', component: ListaCompraComponent }
];
