import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private countryUrl = 'https://restcountries.eu/rest/v2/name';
  URI:string = '';
  constructor(private http: HttpClient) { 
    this.URI=`https://restcountries.eu/rest/v2/lang/es`
  }

  public getcountry(){
    return this.http.get(`https://restcountries.eu/rest/v2/lang/es`);
  }

  public getcountrydetails(name){
    const url = `${this.countryUrl}/${name}`;
    return this.http.get(url);
  }

}
