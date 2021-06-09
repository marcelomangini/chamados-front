import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from '../chamado.model';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-chamado-delete',
  templateUrl: './chamado-delete.component.html',
  styleUrls: ['./chamado-delete.component.css']
})
export class ChamadoDeleteComponent implements OnInit {

  chamado: Chamado = {
    id: '',
    titulo: '',
    status: 0,
    descricao: '',
    dataInclusao: null,
    dataConclusao: null
  }
  listStatus = [
    {id:0,value: 'Aberto'},
    {id:1,value: 'Execução'},
    {id:2,value: "Concluído"}
  ];  
  constructor(private service: ChamadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  
  findById():void {
    this.service.findById(this.chamado.id).subscribe((resposta)=>{
      this.chamado = resposta;
      //console.log(this.chamado);
    })
  }

  delete(): void {
    this.service.delete(this.chamado.id).subscribe((resposta)=>{
      this.router.navigate(['chamados']);
      this.service.mensagem('Chamado deletado com sucesso!');
    }, err =>{
      this.service.mensagem(err.error.error);
    } );
  }

  cancel(): void {
      this.router.navigate(['chamados']);    
  }  
}
