import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fichas';
  
  navegarPar(tipoFicha: number) {
    if (tipoFicha === 1){
      console.log("Deveria navegar para a ficha do vampiro")
      return;
    }
    console.log("Nenhuma navegação deve ser feita!");
  }
}
