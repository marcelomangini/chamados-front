import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChamadoCreateComponent } from './components/views/chamado/chamado-create/chamado-create.component';
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
  },
  {
    path:"chamados/create",
    component: ChamadoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
