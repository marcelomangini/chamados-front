import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../comentario.model';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-read-all',
  templateUrl: './comentario-read-all.component.html',
  styleUrls: ['./comentario-read-all.component.css']
})
export class ComentarioReadAllComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'comentario', 'dataComentario', 'acoes'];

  id_chamado: String = '';

  comentarios: Comentario[] = []; 

  constructor(
    private service: ComentarioService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id_chamado = this.route.snapshot.paramMap.get('id_chamado');
    this.findAll();

  }

  findAll(): void {
    this.service.findAllByChamado(this.id_chamado).subscribe((resposta)=>{
      this.comentarios = resposta
      console.log(this.comentarios);
    })

  }

  navegarParaCriarComentario(): void {
    this.router.navigate([`chamados/${this.id_chamado}/comentarios/create`])
  }
}
