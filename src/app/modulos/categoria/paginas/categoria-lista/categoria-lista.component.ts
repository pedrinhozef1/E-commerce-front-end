import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/comuns/models/paginacao.model';
import { RouteService } from 'src/app/comuns/services/route.service';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
              private routeService: RouteService) { }

  categorias = {} as IPageConfig<ICategoria>;

  ngOnInit(): void {
    this.todasCategorias();
  }

  todasCategorias(){
    this.categoriaService.todasCategorias()
      // then captura o retorno e passa como parametro o retorno
      // passa uma função dentro da função
      .then(retorno =>{ // 
        this.categorias = retorno;
      })
    }

    visualizar(categoria: any){
      // rota desejada ao clicar no botao
      this.routeService.navegacao(`/categoria/visualizar/${categoria.id}`);
    }

    cadastrarCategoria(){
      this.routeService.navegacao(`/categoria/cadastrar`);
    }
  }