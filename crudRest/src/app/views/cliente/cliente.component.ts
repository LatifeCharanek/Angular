import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  listaClientes: Cliente[] = [];
  cliente = new Cliente();
  estaEditando = false;


  constructor(private clienteService: ClienteService){}
  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(clientes => {
      this.listaClientes = clientes;
    });

  }
  inserir(){
    this.clienteService.inserir(this.cliente).subscribe(cliente => {
      this.listar();
    });
  }

  remover(id: number){
    this.clienteService.excluir(id).subscribe(() => {
      this.listar();

    });
  }

  atualizar(){
    this.clienteService.atualizar(this.cliente).subscribe(cliente => {
      this.listar();

    });
  }

  salvar(){
    if (this.estaEditando){
      this.atualizar();
    }else {
      this.inserir();
    }

    }

  selecionar(cliente: Cliente){
      this.cliente = cliente;
      this.estaEditando = true;
    }

    cancelar(){
      this.estaEditando = false;7
      this.cliente = new Cliente();
    
    }

  
  }


