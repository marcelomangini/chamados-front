import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';


interface Status {
  id: Number;
  viewValue: String;
}

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  dataAtual = new Date();
  listStatus: Status[] = [
    {id:0,viewValue: 'Aberto'},
    {id:1,viewValue: 'Execução'},
    {id:2,viewValue: "Concluído"}
  ];
  selectedStatus = this.listStatus[0].id;

  chamado: Chamado = {
    titulo: '',
    descricao: '',
    status: 0,
    dataInclusao: null,
    dataConclusao: null
  }

  constructor(private service: ChamadoService, private router: Router) { }

  ngOnInit(): void {
    this.chamado.status =  0;
  }

  create(): void {
    this.chamado.dataInclusao = this.dataAtual;
      /*this.dataAtual = new Date();
      console.log(this.dataAtual.toISOString())      
      this.chamado.dataInclusao = this.dataAtual.toISOString();*/
      //console.log(this.chamado);
      this.service.create(this.chamado).subscribe((resposta) => {
      this.router.navigate(['chamados'])
      this.service.mensagem('Chamado criado com sucesso!');
    },err => {
      console.log(err);
        for(let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
     })    
  }

  cancel(): void {
    this.router.navigate(['chamados']);
  }
}
