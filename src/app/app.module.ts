import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ChamadoReadComponent } from './components/views/chamado/chamado-read/chamado-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ChamadoCreateComponent } from './components/views/chamado/chamado-create/chamado-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChamadoDeleteComponent } from './components/views/chamado/chamado-delete/chamado-delete.component';
import { ChamadoUpdateComponent } from './components/views/chamado/chamado-update/chamado-update.component';
import { ComentarioReadAllComponent } from './components/views/comentario/comentario-read-all/comentario-read-all.component';
import { ComentarioCreateComponent } from './components/views/comentario/comentario-create/comentario-create.component';
import { ComentarioUpdateComponent } from './components/views/comentario/comentario-update/comentario-update.component';
import { ComentarioDeleteComponent } from './components/views/comentario/comentario-delete/comentario-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ChamadoReadComponent,
    ChamadoCreateComponent,
    ChamadoDeleteComponent,
    ChamadoUpdateComponent,
    ComentarioReadAllComponent,
    ComentarioCreateComponent,
    ComentarioUpdateComponent,
    ComentarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
