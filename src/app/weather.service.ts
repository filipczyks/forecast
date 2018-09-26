import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const API_KEY = '17fb125e8db0204cd5cdc395369446e1'
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?{query}&appid=' + API_KEY

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecastByCity(city: string): Observable<any> {
    return this.http.get(this.buildUrl('q=' + city))
  }

  getForecastByLatLon(lat: string, lon: string): Observable<any> {
    return this.http.get(this.buildUrl('lat=' + lat + '&lon=' + lon))
  }

  buildUrl(query: string) {
    return API_URL.replace('{query}', query)
  }
}
