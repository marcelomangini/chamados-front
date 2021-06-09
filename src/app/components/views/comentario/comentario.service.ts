import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from './comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByChamado(id_chamado: String): Observable<Comentario[]>{
    const url = `${this.baseUrl}/comentarios?chamado=${id_chamado}`;
    return this.http.get<Comentario[]>(url);
  }

  findById(id: String):Observable<Comentario>{
    const url = `${this.baseUrl}/comentarios/${id}`;
    return this.http.get<Comentario>(url);
  }

  update(comentario: Comentario):Observable<Comentario> {
    const url = `${this.baseUrl}/comentarios/${comentario.id}`;
    return this.http.put<Comentario>(url,comentario);      
  }

  create(comentario: Comentario, id_chamado: String): Observable<Comentario> {
    const url = `${this.baseUrl}/comentarios?chamado=${id_chamado}`;
    return this.http.post<Comentario>(url,comentario);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/comentarios/${id}`;
    return this.http.delete<void>(url);
  }
  mensagem(str: String): void {
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }  
}
