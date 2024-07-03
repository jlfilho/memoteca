import { Component, inject } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  private service: PensamentoService = inject(PensamentoService);
  private router: Router = inject(Router);


  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(
      () => {
        this.router.navigate(['listarPensamento']);
      }
    );

  }

  cancelarPensamento(){
    this.router.navigate(['listarPensamento']);
  }

}
