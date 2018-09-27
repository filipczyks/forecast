import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherCardComponent } from './forecast/weather-card/weather-card.component';
import { DayCardComponent } from './forecast/day-card/day-card.component';
import { MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ForecastComponent, WeatherCardComponent, DayCardComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatChipsModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        WeatherService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'forecast'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('forecast');
  }));
});
