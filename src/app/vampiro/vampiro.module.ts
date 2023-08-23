import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VampiroRoutingModule } from './vampiro-routing.module';
import { VampiroComponent } from './paginas/vampiro.component';
import { ComponentesModule } from 'src/app/core/componentes/componentes.module';
import { AgrupadorPontosComponent } from './componentes/agrupador-pontos/agrupador-pontos.component';
import { DisciplinaComponent } from './componentes/disciplina/disciplina.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';


@NgModule({
  declarations: [
    VampiroComponent,
    AgrupadorPontosComponent,
    DisciplinaComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    VampiroRoutingModule,
    ComponentesModule
  ]
})
export class VampiroModule { }
