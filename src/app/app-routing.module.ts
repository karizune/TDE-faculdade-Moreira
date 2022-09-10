import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { EntrevistaComponent } from './components/entrevista/entrevista.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OutrosComponent } from './components/outros/outros.component';
import { ResenhaComponent } from './components/resenha/resenha.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';

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
    GetUserRoutes(),
    GetOtherRoutes()
  ]);

  return routes;
}

function GetDefaultRoutes(): Route[]{
  var routes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent}
  ]

  return routes;
}

function GetUserRoutes(): Route[]{
  var routes: Route[] = [
    {path: 'user/profile', component: UserProfileComponent}
  ];

  return routes;
}

function GetOtherRoutes(): Route[]{
  var routes: Route[] = [
    {path: 'entrevista', component: EntrevistaComponent},
    {path: 'resenha', component: ResenhaComponent},
    {path: 'gestao-e-governanca-de-ti', component: OutrosComponent}
  ];

  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(GetRoutes(), {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
