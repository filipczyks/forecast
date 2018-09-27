import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DayCardComponent } from './day-card/day-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let httpMock: any;
  let weatherServiceSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent, WeatherCardComponent, DayCardComponent ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatChipsModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [ WeatherService, HttpClient ]
    }).compileComponents();

    httpMock = TestBed.get(HttpTestingController);

    const weatherServiceResponse = {
      list: [
        {
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
        }
      ]
    };

    weatherServiceSpy = spyOn(TestBed.get(WeatherService), 'getForecastByLatLon').and.returnValue(weatherServiceResponse);

    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
