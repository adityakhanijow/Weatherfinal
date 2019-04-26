import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {

currentWeatherUrl='http://api.openweathermap.org/data/2.5/weather?units=metric&q='  
url:string='http://api.openweathermap.org/data/2.5/forecast?units=metric&q=';
authKey:string='&APPID=7be5a46933d5aa1e7c2571e63fbb5c4c'
  constructor(private http:HttpClient) { }

  getFact(city:string){
    return this.http.get(this.url+city+this.authKey);
  }

  getCurrentData(city:string){
    return this.http.get(this.currentWeatherUrl+city+this.authKey)
  }

}
