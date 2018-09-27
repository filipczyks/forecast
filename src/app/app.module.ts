import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { WeatherCardComponent } from './forecast/weather-card/weather-card.component';
import { DayCardComponent } from './forecast/day-card/day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    WeatherCardComponent,
    DayCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
