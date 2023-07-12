import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CriarPensamentoComponent} from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentosComponent} from "./componentes/pensamentos/listar-pensamentos/listar-pensamentos.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
