import { Component } from '@angular/core';
import { VampiroPontoEnum } from '../vampiro-ponto-enum';

@Component({
  selector: 'app-vampiro',
  templateUrl: './vampiro.component.html',
  styleUrls: ['./vampiro.component.scss']
})
export class VampiroComponent {

  public fisico:VampiroPontoEnum = VampiroPontoEnum.FISICO;

  public social:VampiroPontoEnum = VampiroPontoEnum.SOCIAL;

  public mental:VampiroPontoEnum = VampiroPontoEnum.MENTAL;
  
  public padrao1:VampiroPontoEnum = VampiroPontoEnum.PADRAO1;
  
  public padrao2:VampiroPontoEnum = VampiroPontoEnum.PADRAO2;
  
  public padrao3:VampiroPontoEnum = VampiroPontoEnum.PADRAO3;
  
  public padrao4:VampiroPontoEnum = VampiroPontoEnum.PADRAO4;
  
  public padrao5:VampiroPontoEnum = VampiroPontoEnum.PADRAO5;
  
  public padrao6:VampiroPontoEnum = VampiroPontoEnum.PADRAO6;
  
  public padrao7:VampiroPontoEnum = VampiroPontoEnum.PADRAO7;
  
  public padrao8:VampiroPontoEnum = VampiroPontoEnum.PADRAO8;
  
  public padrao9:VampiroPontoEnum = VampiroPontoEnum.PADRAO9;



  
}
