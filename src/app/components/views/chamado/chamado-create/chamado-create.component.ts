import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamado: Chamado = {
    titulo: '',
    descricao: '',
    status: '0',
    dataInclusao: null,
    dataConclusao: null
  }

  listStatus = ['Em aberto', 'Em andamento', 'Concluido'];

  constructor(private service: ChamadoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.chamado).subscribe((resposta) => {
      this.router.navigate(['chamados'])
      this.service.mensagem('Chamado criado com sucesso!');
    },err => {
        for(let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
     })    
  }

  cancel(): void {
    this.router.navigate(['chamados']);
  }
}
