import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../comentario.model';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

  id_chamado: String = '';

  comentario: Comentario = {
    id: '',
    comentario: '',
    dataComentario: null
  }

  coment = new FormControl('',[Validators.minLength(3),Validators.required])

  constructor(
    private service: ComentarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_chamado = this.route.snapshot.paramMap.get('id_chamado');
    this.getMessage();

  }

  create():void {
    this.service.create(this.comentario,this.id_chamado).subscribe((resposta)=>{
       this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
       this.service.mensagem('Comentário criado com sucesso!');
    },err=>{
      this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
      this.service.mensagem('Erro ao criar novo comentário. Tente mais tarde!');
    })
  }

  cancel():void {
    this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
  }

  getMessage() {
    if(this.coment.invalid) {
      return 'O campo comentário deve conter no mínimo 3 caracteres.'
    }
    return false;
  }
}
