import { Component, Input } from '@angular/core';

export interface Pensamento {
  id?: string
  conteudo: string
  autoria: string
  modelo: string
}

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento!: Pensamento;


  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }



}
