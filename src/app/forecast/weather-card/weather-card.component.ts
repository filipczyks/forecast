import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  ITEM = {
    temp: 0,
    humidity: 0,
    wind: 0,
    date: '',
    time: '',
    icon: ''
  };

  @Input()
  item = this.ITEM;

  constructor() {
    this.item = this.ITEM;
  }

  ngOnInit() {
  }

}
