export class Pais{
    nombre : string;
    moneda : string;
    poblacion : string;
    capital : string;
    idioma : string;
    region : string;
    bandera : string;

    constructor(
        nombre: string,
        moneda: string,
        poblacion: string, 
        capital: string,
        idioma: string,
        region : string, 
        bandera: string) {
            this.nombre = nombre;
            this.moneda = moneda;
            this.poblacion = poblacion;
            this.capital = capital;
            this.idioma = idioma;
            this.region = region;
            this.bandera = bandera;

    }
}