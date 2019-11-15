import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paisdetalle',
  templateUrl: './paisdetalle.component.html',
  styleUrls: ['./paisdetalle.component.css']
})
export class PaisdetalleComponent implements OnInit {
    @Input() nombre : string;
    @Input() moneda : string;
    @Input() poblacion : string;
    @Input() capital : string;
    @Input() idioma : string;
    @Input() region : string;
    @Input() bandera : string;
 
  @Output() DetallesPais: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }

  emitDetalles(){
    let detailsCountry: any ={
      detailsNombre : this.nombre,
      detailsMoneda : this.moneda,
      detailsPoblacion : this.poblacion,
      detailsCapital : this.capital,
      detailsIdioma : this.idioma,
      detailsRegion : this.region,
      detailsBandera : this.bandera
    }
  this.DetallesPais.emit(detailsCountry);
  }
}
