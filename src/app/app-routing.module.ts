import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ficha/vampiro',
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () =>
          import(
            './vampiro/vampiro.module'
          ).then((m) => m.VampiroModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
