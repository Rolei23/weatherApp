import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
city="Pretoria"
list
WeatherData
date = Date().toString();
  constructor(private service: WeatherService) {

    this.service.getWeatherData(this.city).subscribe(data=>{
this.list=data;
      console.log(data)
      this.WeatherData=this.list.list
    }
      );
  }
  submit(city){
    this.service.getWeatherData(this.city).subscribe(data=>{
      this.list=data;
      console.log(data);
      this.WeatherData=this.list.list;
 
  });
 }
  

}
