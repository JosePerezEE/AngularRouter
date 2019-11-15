import { Component, OnInit } from '@angular/core';
import {Pais} from '../Paises';
import {RouterService} from '../router.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  pais;
  title : string = "Lista de paises";
  paisnuevo : Pais;
  paises: Pais[]=[];
  constructor(private routerService: RouterService) { 
    this.paisnuevo = new Pais('','','','','','','');
  }

  ngOnInit() {
    this.paises.push(new Pais('Honduras','Lempira','8,576,532','Tegucigalpa','Español','Centroamérica ','https://restcountries.eu/data/hnd.svg'));
    this.paises.push(new Pais('Nicaragua','Córdoba','6,262,703','Managua','Español','Centroamérica ','https://restcountries.eu/data/nic.svg'));
    this.paises.push(new Pais('Costa Rica','Colón','4,890,379','San José','Español','Centroamérica ','https://restcountries.eu/data/cri.svg'));
    this.paises.push(new Pais('Guatemala','Quetzal','16,176,133','Guatemala City','Español','Centroamérica ','https://restcountries.eu/data/gtm.svg'));
    this.paises.push(new Pais('El Salvador','Dolar','6,520,675','San Salvador','Español','Centroamérica ','https://restcountries.eu/data/slv.svg'));
    this.paises.push(new Pais('Panama','Balboa','3,814,672','Panama City','Español','Centroamérica ','https://restcountries.eu/data/pan.svg'));      
  }
  
  guardar(){
      this.paises.unshift(this.paisnuevo);
      this.paisnuevo = new Pais('','','','','','','');
      window.alert("Se agrego exitosamente a su lista de paises");
  }

  Detallerecibido; //any = {
    //detailsNombre : '',
    //detailsMoneda : '',
   // detailspoblacion : '',
    //detailscapital : '',
    //detailsidioma : '',
    //detailsregion : '',
    //detailsbandera : ''
 // };
  public getDetails(data:any): void{
    this.Detallerecibido = data;
  }
}
