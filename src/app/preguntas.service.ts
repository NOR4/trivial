import { Injectable } from '@angular/core';
import { TEMAS } from './db/temasdb';
import { Tema } from './models/tema';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
 

  constructor() { }

  getAll(): Tema[] {
    return TEMAS;
    
  }
  getPreguntasPorTema(temaId: number): Question[]{
    const tema = TEMAS.find(t => t.id === temaId);
    return tema ? tema.questions : [];
  }

  getTemaPorId(temaId: number): Tema | undefined {
    return TEMAS.find(t => t.id === temaId);
  }
  
}
