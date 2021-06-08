import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from './comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  findAllByChamado(id_chamado: String): Observable<Comentario[]>{
    const url = `${this.baseUrl}/comentarios?chamado=${id_chamado}`;
    return this.http.get<Comentario[]>(url);
  }
}
