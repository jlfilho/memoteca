import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  criarPensamento(){
    alert("Novo pensamento")
  }

  cancelarPensamento(){
    alert("Pensamento cancelado")
  }

}
