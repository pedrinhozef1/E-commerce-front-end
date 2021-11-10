import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPageConfig } from 'src/app/comuns/models/paginacao.model';
import { ICadastroAtualizacaoCategoria, ICategoria } from '../model/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // declara variavel httpCliente que recebe interface HttpClient do angular
  constructor(private httpClient: HttpClient) { }

  // metodo busca todas categorias

  todasCategorias(): Promise<IPageConfig<ICategoria>> {
    // retorna uma requisicao Http
    return this.httpClient
      //
      .get<IPageConfig<ICategoria>>('http://localhost:8080/categoria/todas-categorias/')
      .toPromise();
  }

  buscarUmaCategoria(id: number): Promise<ICategoria> {
    return this.httpClient
    .get<ICategoria>(`http://localhost:8080/categoria/uma-categoria/${id}`)
    .toPromise();
  }

  gravar(categoria: ICadastroAtualizacaoCategoria): Observable<ICadastroAtualizacaoCategoria>{
    return this.httpClient
    .post<ICadastroAtualizacaoCategoria>(`http://localhost:8080/categoria/cadastrar`, categoria);
  }
}
