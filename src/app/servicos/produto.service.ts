import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }

  // Função para listar os produtos (VERBO GET)
  obterProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  // Função para listar por ID (VERBO GET)
  obterProdutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  // Função para criar um produto (VERBO POST)
  adicionarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produto)
  }

  // Função para atualizar um produto (VERBO PUT/UPDATE)
  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto)
  }

  // Função para deletar um produto (VERBO DELETE)
  deletarProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
