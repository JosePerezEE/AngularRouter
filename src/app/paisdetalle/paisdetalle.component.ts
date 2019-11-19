import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Pais } from '../Paises';
declare var $: any;

@Component({
  selector: 'app-paisdetalle',
  templateUrl: './paisdetalle.component.html',
  styleUrls: ['./paisdetalle.component.css']
})
export class PaisdetalleComponent implements OnInit {
    @Input('datos') pais : Pais;
    @Output() DetallesPais: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(){
    $('#collapseDetalle').on('hide.bs.collapse', function (e) {
      e.preventDefault();
    });
    
  }

  emitDetalles(){
    let detailsCountry: any ={
      detailsNombre : this.pais.nombre,
      detailsMoneda : this.pais.moneda,
      detailsPoblacion : this.pais.poblacion,
      detailsCapital : this.pais.capital,
      detailsIdioma : this.pais.idioma,
      detailsRegion : this.pais.region,
      detailsBandera : this.pais.bandera
    }
  this.DetallesPais.emit(detailsCountry);
  }
}
