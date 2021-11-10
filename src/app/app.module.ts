import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './meu-componente/primeiro-componente/primeiro-componente.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CategoriaModule } from './modulos/categoria/categoria.module';
import { ProdutoModule } from './modulos/produto/produto.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoVisualizarComponent } from './src/app/modulos/produto/paginas/produto-visualizar/produto-visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    HeaderComponent,
    SidebarComponent,
    ProdutoVisualizarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriaModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
