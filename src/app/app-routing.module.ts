import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { PortadaComponent } from './components/portada/portada.component';

const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'preguntas/:temaId', component:PreguntaComponent},
  { path: '', redirectTo: '/portada', pathMatch: 'full'},
  { path: '**', redirectTo: '/portada', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
