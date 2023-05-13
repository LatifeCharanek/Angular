import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  listar(): Observable <Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/cliente')

  }
  inserir(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:3000/cliente',cliente);

  }
  atualizar(cliente:Cliente){
    this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente);

  }
  excluir(id: number){
    return this.http.delete(`http://localhost:3000/cliente/${id}`);
  }
} 
