import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChamadoCreateComponent } from './components/views/chamado/chamado-create/chamado-create.component';
import { ChamadoDeleteComponent } from './components/views/chamado/chamado-delete/chamado-delete.component';
import { ChamadoReadComponent } from './components/views/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './components/views/chamado/chamado-update/chamado-update.component';
import { ComentarioReadAllComponent } from './components/views/comentario/comentario-read-all/comentario-read-all.component';
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
    path: "chamados/create",
    component: ChamadoCreateComponent
  },
  {
    path: "chamados/delete/:id",
    component: ChamadoDeleteComponent
  },
  {
    path: "chamados/update/:id",
    component: ChamadoUpdateComponent
  },
  {
    path: "chamados/:id_chamado/comentarios",
    component: ComentarioReadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
