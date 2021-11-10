import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaCadastrarComponent } from "./paginas/categoria-cadastrar/categoria-cadastrar.component";
import { CategoriaListaComponent } from "./paginas/categoria-lista/categoria-lista.component";
import { CategoriaVisualizarComponent } from "./paginas/categoria-visualizar/categoria-visualizar.component"

@Component({
    template: '<router-outlet></router-outlet>',
  })
export class GenericRouterComponent { }

// cria variavel rotas e atribui a ela a interface Routes do angular
const rotas: Routes =[
  {
    // caminho da url, similar ao RequestMapping do Spring
    path: 'categoria',
    children: [
      // rotas para acessar a categoria
      { path: '', redirectTo: '/categoria/lista', pathMatch: 'full'},
      { path: 'lista', component: CategoriaListaComponent },
      { path: 'visualizar/:idCategoria', component: CategoriaVisualizarComponent },
      { path: 'cadastrar', component: CategoriaCadastrarComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotas),
  ],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }