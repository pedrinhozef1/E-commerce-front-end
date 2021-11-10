import { Injectable } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  // carregando router com a Interface Router do Angular
  constructor(private router: Router) { }

  // metodo utilizado para navegação 
  public navegacao(rota: string, extras?: NavigationExtras){
    this.router.navigate([rota], extras);
  }
}
