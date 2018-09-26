import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../weather.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  lat: number
  lon: number

  city: string

  forecast: Observable<any>

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const c = position.coords
        this.lat = c.latitude
        this.lon = c.longitude

        console.log(this.lat)
        console.log(this.lon)

        this.getForecast()
      })
    } else {
      this.lat = 10
      this.lon = 10
    }
  }

  getForecast() {
    this.forecast = this.weather.getForecastByLatLon(this.lat, this.lon)
      .do(data => console.log(data))
  }

  onEnter(value: string) {
    this.city = value
    this.forecast = this.weather.getForecastByCity(this.city)
      .do(data => console.log(data))
  }

  /// Helper to make weather icons work
  /// better solution is to map icons to an object
  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy'
      case 'clear-day':
        return 'wi wi-day-sunny'
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy'
      default:
        return `wi wi-day-sunny`
    }
  }

}
