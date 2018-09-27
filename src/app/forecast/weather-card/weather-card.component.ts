import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  ITEM = {
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

  @Input()
  item = this.ITEM;

  constructor() {
    this.item = this.ITEM;
  }

  ngOnInit() {
  }

}
