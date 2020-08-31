import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListarComponent } from './listar/listar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "oi" } },
  { path: 'listar', component: ListarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
