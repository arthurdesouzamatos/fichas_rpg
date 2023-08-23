import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.scss']
})
export class PontosComponent implements OnInit {
  ngOnInit(): void {
    if(this.ehDeAtributo){
      this.pontos[0].preencher();
    }
  }

  @Input() public ehDeAtributo = false;
   
  @Input() public nome: string = '';

  public pontos: Array<Ponto> = [new Ponto(1), new Ponto(2), new Ponto(3), new Ponto(4), new Ponto(5)]

  public pontoSelecionado(pontoClicado: Ponto): void {

    const pontosPreenchidos = this.pontos.filter(ponto => ponto.ehPreenchido)

    const ehPontoNovo: boolean = !pontoClicado.ehPreenchido;
    if (ehPontoNovo) {
      this.pontos.forEach((ponto, index) => {
        if (index < pontoClicado.id) {
          ponto.preencher();
        }
      })
      return;
    }

    const possuiPreenchidosPosteriores: boolean = pontoClicado.id < pontosPreenchidos.length;
    if (possuiPreenchidosPosteriores) {
      pontosPreenchidos.filter(ponto => ponto.id > pontoClicado.id).forEach(ponto => ponto.selecionar());
      return;
    }

    const possuiPreenchidosAnteriores: boolean = pontoClicado.id === pontosPreenchidos.length;
    if (possuiPreenchidosAnteriores) {
      if(pontoClicado.id == 1 && this.ehDeAtributo){
        return;
      }
      this.pontos.find(ponto => ponto.id === pontoClicado.id)?.selecionar();
      return;
    }

  }
}

 export class Ponto {
   
  private _ehPreenchido:boolean = false;

  private circuloPreenchido = 'bi bi-circle-fill';
  private circuloVazio = 'bi bi-circle';

  public constructor(public id:number){}

  public get cssBolinha() {
      if (this._ehPreenchido) {
          return this.circuloPreenchido
      }
      return  this.circuloVazio
  }

  public get ehPreenchido() {
      return this._ehPreenchido;
  }
  
  public selecionar() {
      this._ehPreenchido = !this._ehPreenchido;
  }

  public preencher(){
      this._ehPreenchido = true;

  }
}
