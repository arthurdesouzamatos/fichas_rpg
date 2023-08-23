import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VampiroComponent } from './paginas/vampiro.component';

const routes: Routes = [{
  path: '',
  component: VampiroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VampiroRoutingModule { }
