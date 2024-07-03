import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pensamento } from './pensamento/pensamento.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  http: HttpClient = inject(HttpClient)
  private readonly API = 'http://localhost:3000/pensamentos';


  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    console.log(pensamento);
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;

    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }






}
