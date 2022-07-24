import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  getClassCss(region: string): string {
    return region === this.regionActiva ? 'btn-info' : 'btn-outline-info';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.buscarPorRegion(region);
  }

  buscarPorRegion(region: string) {
    this.paisService.buscarPorRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }

  constructor(private paisService: PaisService) {}
}
