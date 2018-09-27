import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input()
  item: {
    weather: [
      {
        icon: ''
      }
    ],
    dt_txt: '',
    main: {
      humidity: '',
      temp: 0
    },
    wind: {
      speed: ''
    }
  };

  constructor() { }

  ngOnInit() {

  }

}
