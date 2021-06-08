import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../comentario.model';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-read-all',
  templateUrl: './comentario-read-all.component.html',
  styleUrls: ['./comentario-read-all.component.css']
})
export class ComentarioReadAllComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'comentario', 'dataComentario', 'comentarios','acoes'];

  id_chamado: String = '';

  comentarios: Comentario[] = []; 

  constructor(private service: ComentarioService, private route: ActivatedRoute) { }

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
}
