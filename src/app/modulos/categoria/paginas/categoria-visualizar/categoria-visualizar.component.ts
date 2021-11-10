import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-visualizar',
  templateUrl: './categoria-visualizar.component.html',
  styleUrls: ['./categoria-visualizar.component.css']
})
export class CategoriaVisualizarComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
              private activatedRoute: ActivatedRoute) { }
  categoria = {} as ICategoria;

  ngOnInit(): void {// pega a rota ativa . tira uma "foto" dessa rota . procura qual parametro é o id categoria
    this.buscarUmaCategoria(this.activatedRoute.snapshot.params.idCategoria);
  }

  // metodo para fazer requisicao para buscar uma categoria
  buscarUmaCategoria(id: number){
    this.categoriaService.buscarUmaCategoria(id)
    .then(retorno =>{
      this.categoria = retorno;
    });
  }

}
