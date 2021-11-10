import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './paginas/categoria-lista/categoria-lista.component';
import { CategoriaRoutingModule, GenericRouterComponent } from './categoria-routing.module';
import { CategoriaVisualizarComponent } from './paginas/categoria-visualizar/categoria-visualizar.component';
import { CategoriaCadastrarComponent } from './paginas/categoria-cadastrar/categoria-cadastrar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriaListaComponent,
    GenericRouterComponent,
    CategoriaVisualizarComponent,
    CategoriaCadastrarComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ]
})
export class CategoriaModule { }
