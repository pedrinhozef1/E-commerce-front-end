import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ProdutoListaComponent } from "./paginas/produto-lista/produto-lista.component";
import { ProdutoVisualizarComponent } from "./paginas/produto-visualizar/produto-visualizar.component";

@Component({
    template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const rotas: Routes=[
    {
    path: 'produto',
    children: [
        { path: '', redirectTo: '/produto/lista', pathMatch: 'full'},
        { path: 'lista', component: ProdutoListaComponent },
        { path: 'visualizar', component: ProdutoVisualizarComponent}
    ] 
}
];

@NgModule({
    imports:[
        RouterModule.forChild(rotas),    
    ],
    exports: [RouterModule]
})

export class ProdutoRoutingModule { }
    