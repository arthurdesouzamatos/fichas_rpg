import { Component, Input } from '@angular/core';
import { VampiroPontoEnum } from '../../vampiro-ponto-enum';

@Component({
  selector: 'app-agrupador-pontos',
  templateUrl: './agrupador-pontos.component.html',
  styleUrls: ['./agrupador-pontos.component.scss']
})
export class AgrupadorPontosComponent {

  @Input()
  public tipo: VampiroPontoEnum = VampiroPontoEnum.PADRAO;
}
