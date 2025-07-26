import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})

// Lógica/Funcionalidades do Componente painel-principal.component.ts
export class PainelPrincipalComponent {
  produtos: any = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe(dados => {
      this.produtos = dados;
    })
  }

  ngOnInit(): void {
    this.listarProdutos();
  }

  editarProduto(id: number) {
    this.router.navigate(['/editar-produto', id]);
  }

  excluirProduto(id: number) {
    if(confirm("Deseja realmente excluir este produto?")) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert("Produto excluído com sucesso!");
        this.listarProdutos();
      });
    }
  }
}
