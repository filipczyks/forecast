import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs-compat/add/operator/map';

const API_KEY = '17fb125e8db0204cd5cdc395369446e1';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?{query}&appid=' + API_KEY;

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getForecastByCity(city: string): Observable<any> {
    return this.mapResults(
      this.http.get(
        this.buildUrl('q=' + city)
      )
    );
  }

  getForecastByLatLon(lat: number, lon: number): Observable<any> {
    return this.mapResults(
      this.http.get(
        this.buildUrl('lat=' + lat + '&lon=' + lon)
      )
    );
  }

  buildUrl(query: string) {
    return API_URL.replace('{query}', query);
  }


  private mapResults(response: Observable<any>) {
    return response.map(result => {
      return result.list.map(item => {
        const dateSplit = item.dt_txt.split(' ');
        return {
          // Kelvin -> Celcius conversion
          temp: item.main.temp - 273,
          humidity: item.main.humidity,
          wind: item.wind.speed,
          // little trade off here, splitting that date into two properties should happen in Presenter
          // but on the other hand creating another layer just to do that seems like too much
          date: dateSplit[0],
          time: dateSplit[1],
          icon: item.weather[0].icon
        };
      });
    });
  }
}
