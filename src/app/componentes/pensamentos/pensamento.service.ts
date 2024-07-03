import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pensamento } from './pensamento/pensamento.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  http: HttpClient = inject(HttpClient)
  private readonly API = "http://localhost:3000/pensamentos"


  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }




}
