import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ICadastroAtualizacaoCategoria, ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.css']
})
export class CategoriaCadastrarComponent implements OnInit {

  router: Router;
  constructor(private categoriaService: CategoriaService,
              router: Router,
              httpClient: HttpClient) { this.router = router}

  categoria = {} as ICadastroAtualizacaoCategoria

  ngOnInit(): void {
  }

  gravar(categoria: ICadastroAtualizacaoCategoria){
    this.categoriaService.gravar(this.categoria).
    subscribe(() =>
    {
      alert('Gravado com sucesso!');
      this.router.navigate(['/categoria/lista']);
    },
    () =>{
      alert('Erro ao gravar!');
    });
  }
}
