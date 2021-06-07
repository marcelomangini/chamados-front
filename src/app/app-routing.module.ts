import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChamadoReadComponent } from './components/views/chamado/chamado-read/chamado-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "chamados",
    component: ChamadoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
