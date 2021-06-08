import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  chamado: Chamado = {
    titulo: '',
    descricao: '',
    status: '0',
    dataInclusao: null,
    dataConclusao: null
  }
  
  constructor(private service: ChamadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.chamado.id =  this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.chamado.id).subscribe((resposta)=>{
      this.chamado = resposta;/*
      this.chamado.titulo = resposta.titulo;
      this.chamado.status = resposta.status;
      this.chamado.descricao = resposta.descricao;
      this.chamado.dataInclusao = resposta.dataInclusao;
      this.chamado.dataConclusao = resposta.dataConclusao;*/

    })
  }
  update(): void {
    this.service.update(this.chamado).subscribe((resposta)=>{
      this.router.navigate(['chamados']);
      this.service.mensagem('Chamado atualizado com sucesso');
    },err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente');
    })
  }
  
  cancel(): void {
    this.router.navigate(['chamados']);
  }

}
