import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from './componentes/cadastro-produto/cadastro-produto.component';

// Rotas de direcionamento
const routes: Routes = [
  {
    path: 'painel-principal',
    component: PainelPrincipalComponent
  },
  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent
  },
  {
    path: 'editar-produto/:id',
    component: CadastroProdutoComponent
  },
  {
    path: '',
    redirectTo: '/painel-principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
