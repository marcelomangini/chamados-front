import { Component, OnInit } from '@angular/core';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

  chamados: Chamado[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'status', 'descricao','dataInclusao','dataConclusao','acoes'];

  constructor(private service: ChamadoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.chamados = resposta;
    })
  }
  
}
