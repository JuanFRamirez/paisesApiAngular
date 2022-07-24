import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino
    this.paisService.buscarCapital(termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
        this.paises = []
      }
    );
  }

  sugerencias(evento:any){
    this.hayError=false
  }

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

}
