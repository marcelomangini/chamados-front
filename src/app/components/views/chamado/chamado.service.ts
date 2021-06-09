import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chamado } from './chamado.model';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Chamado[]> {
    const url = `${this.baseUrl}/chamados`;
    return this.http.get<Chamado[]>(url)
  }

  findById(id: String): Observable<Chamado> {
    const url = `${this.baseUrl}/chamados/${id}`;
    return this.http.get<Chamado>(url);
  }

  create(chamado: Chamado): Observable<Chamado> {
    const url = `${this.baseUrl}/chamados`;
    return this.http.post<Chamado>(url,chamado);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/chamados/${id}`;
    return this.http.delete<void>(url);
  }
  update(chamado: Chamado):Observable<void>{

    /*const data = new Date();
    if (chamado.status == '2') {
      console.log(data.toLocaleDateString());
      chamado.dataConclusao = data;
    }*/

    const url = `${this.baseUrl}/chamados/${chamado.id}`;
    return this.http.put<void>(url,chamado);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
