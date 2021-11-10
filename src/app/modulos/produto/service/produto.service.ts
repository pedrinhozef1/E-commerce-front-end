import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPageConfig } from 'src/app/comuns/models/paginacao.model';
import { IProduto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  todosProduto(): Promise<IPageConfig<IProduto>>{
    return this.httpClient
    .get<IPageConfig<IProduto>>(`http://localhost:8080/produto/todos`)
    .toPromise();
  }
}
