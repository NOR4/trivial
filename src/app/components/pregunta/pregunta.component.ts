import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasService } from 'src/app/preguntas.service';
import { Tema } from 'src/app/models/tema';
import { Question } from 'src/app/models/question';
import { ContadorService } from 'src/app/contador.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  //declarar variables que almacenan lo que devuelve el servicio
  temaId: number | undefined;
  temas: Tema[] = [];
  currentTema: Tema | undefined;
  preguntas: Question[] = [];
  preguntaActualIndex: number = 0;
  selectedOption: string | null = null;
  isAnswered: boolean = false;
  contador: number = 0;


  constructor(
    private route: ActivatedRoute,
    private preguntasService: PreguntasService,
    private contadorService: ContadorService
  ) {
    
  }

  ngOnInit(): void {
    // Recupera el temaId de la ruta
    this.temaId = +this.route.snapshot.paramMap.get('temaId')!;
    //El operador ! al final le dice a TypeScript que asuma que el valor anterior no es null ni undefined.
    this.preguntas = this.preguntasService.getPreguntasPorTema(this.temaId);

    //coge el tema de la preguntas para mostrarlo en el titulo
    this.currentTema = this.preguntasService.getTemaPorId(this.temaId);
    if (this.currentTema) {
        this.preguntas = this.currentTema.questions;
    }
    console.log(this.preguntas);
    
  }


  //logica para el manejo de las preguntas correctas
  responder(opcion: string): void {
    // Aquí puedes manejar la lógica de si la respuesta es correcta o no
    // Por ejemplo:
    if (!this.isAnswered) {
      this.selectedOption = opcion;
      this.isAnswered = true;

      if (opcion === this.preguntas[this.preguntaActualIndex].correct) {
        this.contadorService.incrementarContador(); // Aumenta el contador si la respuesta es correcta
      }   

      setTimeout(() => {
        if (this.preguntaActualIndex < this.preguntas.length - 1) {
            this.preguntaActualIndex++;
            this.isAnswered = false;
            this.selectedOption = null;
        } else {
            // Aquí puedes manejar qué hacer cuando se terminen todas las preguntas
            console.log("¡Todas las preguntas han sido contestadas!");
        }
    }, 1000); 

     
  }

  
}




}
