import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './paginas/produto-lista/produto-lista.component';
import { ProdutoRoutingModule, GenericRouterComponent } from './produto-routing.module';
import { ProdutoVisualizarComponent } from './paginas/produto-visualizar/produto-visualizar.component';


@NgModule({
  declarations: [
    ProdutoListaComponent,
    GenericRouterComponent,
    ProdutoVisualizarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
