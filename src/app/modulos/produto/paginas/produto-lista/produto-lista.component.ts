import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/comuns/models/paginacao.model';
import { RouteService } from 'src/app/comuns/services/route.service';
import { IProduto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(private produtoSerivce: ProdutoService,
              private routeSerivce: RouteService) { }

  produtos = {} as IPageConfig<IProduto>;

  ngOnInit(): void {
    this.todosProdutos();
    console.log('on init');
  }

  todosProdutos(){
    this.produtoSerivce.todosProduto()
    .then(retorno =>{
      this.produtos = retorno;
    })
  }

}
