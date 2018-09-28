import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { map } from 'rxjs/operators';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  lat: number;
  lon: number;

  city: string;

  forecast: Observable<any>;

  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const c = position.coords;
          this.lat = c.latitude;
          this.lon = c.longitude;
          this.getForecast('');
        }
      );
    }
  }

  getForecast(value: string) {
    this.city = value;

    if (this.city !== undefined && this.city !== '') {
      this.forecast = this.weather.getForecastByCity(this.city);
    } else {
      this.forecast = this.weather.getForecastByLatLon(this.lat, this.lon);
    }
  }
}
