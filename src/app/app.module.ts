import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
