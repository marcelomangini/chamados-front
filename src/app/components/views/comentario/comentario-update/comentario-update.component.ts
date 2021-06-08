import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../comentario.model';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-update',
  templateUrl: './comentario-update.component.html',
  styleUrls: ['./comentario-update.component.css']
})
export class ComentarioUpdateComponent implements OnInit {
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
    this.comentario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.getMessage();
  }

  cancel(): void {
    this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
  }

  findById(): void{
    this.service.findById(this.comentario.id).subscribe((resposta)=>{
      this.comentario = resposta;
    })
  }

  update(): void {
    this.service.update(this.comentario).subscribe((resposta)=>{
      this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
      this.service.mensagem('Comentário atualizado com sucesso!')
    }, err =>{
      this.router.navigate([`chamados/${this.id_chamado}/comentarios`]);
      this.service.mensagem('Falha ao atualizar comentário! Tente mais tarde.')     
    })
  }

  getMessage() {
    if(this.coment.invalid) {
      return 'O campo comentário deve conter no mínimo 3 caracteres.'
    }
    return false;
  }
}
