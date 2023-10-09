import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private _contadorSubject = new BehaviorSubject<number>(0);
  contador$: Observable<number> = this._contadorSubject.asObservable();

  get contador(): number {
    return this._contadorSubject.value;
  }
  constructor() { }



  incrementarContador(): void {
    const nuevoValor = this.contador + 1;
    this._contadorSubject.next(nuevoValor);
  }
}
