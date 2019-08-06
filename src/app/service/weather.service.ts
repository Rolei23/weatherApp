import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 appid="b1bf9f5502c74cf66df3106087cd2e48"
  constructor(private http: HttpClient) { }

  getWeatherData(city:string){

    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID="+this.appid)
  }
}
