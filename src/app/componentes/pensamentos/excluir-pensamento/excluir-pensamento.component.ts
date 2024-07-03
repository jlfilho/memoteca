import { Component, inject } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {
  private pensamentoService: PensamentoService = inject(PensamentoService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }


  excluirPensamento() {

  }

  cancelar() {

  }

}
