import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(pais: any) {
    this.termino = pais;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(pais).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }

  buscarPaisSugerido(termino: string) {
    this.buscar(termino);
  }
  constructor(private paisService: PaisService) {}
}
