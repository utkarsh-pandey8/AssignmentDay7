import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //currencies:any[]
  constructor(private httpClient : HttpClient) //creating variable of type HttpClient
  { 
  
  }

  public getCountries():any
  {
    //we are making a restful call
    return this.httpClient.get("https://restcountries.com/v3.1/name/nepal")
  }
}
