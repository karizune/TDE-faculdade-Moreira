import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { EntrevistaComponent } from './components/entrevista/entrevista.component';
import { HomeComponent } from './components/home/home.component';
import { OutrosComponent } from './components/outros/outros.component';
import { PesquisaItilComponent } from './components/pesquisa-itil/pesquisa-itil.component';
import { ResenhaComponent } from './components/resenha/resenha.component';
import { TIEmGestaoComBIComponent } from './components/ti-em-gestao-com-bi/ti-em-gestao-com-bi.component';

const routes: Routes = [];

function PushRoutes(itens: Array<Route[]>): void{
  itens.forEach((_routes: Route[]) => {
    _routes.forEach((route: Route) => {
      routes.push(route);
    });
  });
}

function GetRoutes(): Routes{
  PushRoutes([
    GetDefaultRoutes(),
    GetOtherRoutes()
  ]);

  return routes;
}

function GetDefaultRoutes(): Route[]{
  var routes: Route[] = [
    {path: 'home', component: HomeComponent}
  ]

  return routes;
}

function GetOtherRoutes(): Route[]{
  var routes: Route[] = [
    {path: 'entrevista', component: EntrevistaComponent},
    {path: 'resenha', component: ResenhaComponent},
    {path: 'gestao-e-governanca-de-ti', component: OutrosComponent},
    {path: 'pesquisa-itil', component: PesquisaItilComponent},
    {path: 'TIEmGestaoComBI', component: TIEmGestaoComBIComponent}
  ];

  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(GetRoutes(), {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
