import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

  chamados: Chamado[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'status', 'descricao','dataInclusao','dataConclusao','comentarios','acoes'];

  constructor(private service: ChamadoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.chamados = resposta;
    })
  }

  navegarParaChamadoCreate() {
    this.router.navigate(["chamados/create"])
  }
  
}
