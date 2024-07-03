import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{
  private service: PensamentoService = inject(PensamentoService)

  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void {
      this.service.listar().subscribe(
          (listaPensamento) => {
            this.listaPensamentos = listaPensamento;
          }
      )
  }


}
