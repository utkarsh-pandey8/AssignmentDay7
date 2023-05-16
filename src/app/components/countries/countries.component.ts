import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  public data:any

  //angular will do dependency injection
  constructor(private service : CountriesService){}

  //logic
  ngOnInit(): void {
    this.service.getCountries().subscribe(
      (response:any) =>{
        this.data = response
      },
      (error:any) =>{
        console.log(error)
      })
  }
}
