import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiroProjeto';
  textoPadraoPai = 'Passando valores do pai pro filho';
  textoDoFilho = '';

  setTextoPai(texto: string){
    this.textoDoFilho = texto;
  }
}
