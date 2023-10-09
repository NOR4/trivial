import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContadorService } from 'src/app/contador.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {
   contador: number =0;

  constructor(private contadorService: ContadorService)  {
  }

  ngOnInit(): void {
    this.contadorService.contador$.subscribe(contador => {
      this.contador  = contador;
    });
    
  }
}
