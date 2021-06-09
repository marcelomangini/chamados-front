import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../comentario.model';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-delete',
  templateUrl: './comentario-delete.component.html',
  styleUrls: ['./comentario-delete.component.css']
})
export class ComentarioDeleteComponent implements OnInit {

  id_chamado: String = '';

  comentario: Comentario = {
    id: '',
    comentario: '',
    dataComentario: null
  }

  constructor(
    private service: ComentarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_chamado = this.route.snapshot.paramMap.get('id_chamado');
    this.comentario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    
  }

  cancel(): void {
    this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
  }

  findById(): void{
    this.service.findById(this.comentario.id).subscribe((resposta)=>{
      this.comentario = resposta;
    })
  }

  delete():void{
    this.service.delete(this.comentario.id).subscribe(()=>{
      this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
      this.service.mensagem('Comentário deletado com sucesso')
    }, err => {
      this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
      this.service.mensagem('Falha ao deletar comentário! Tente mais tarde.')
    })
  }
}

