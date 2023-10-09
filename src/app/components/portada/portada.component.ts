import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { PreguntasService } from 'src/app/preguntas.service';
import { ContadorService } from 'src/app/contador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  //se crea un aarray que alacene los datos con los que va a trabajar este componente
  topicArray: Tema[] | undefined;
  constructor(
    private router: Router, private preguntasService: PreguntasService
  ) { 
  
  }

  ngOnInit(): void {

    //se crea una constante que almacene lo q devuelve el metodo del servicio
    this.topicArray = this.preguntasService.getAll();
    console.log(this.topicArray);
  }

  onTemaClick(temaId: number): void {
    this.router.navigate(['/preguntas', temaId]);
  }

}
function contador() {
  throw new Error('Function not implemented.');
}

