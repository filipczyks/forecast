import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatChipsModule, MatDividerModule, MatInputModule } from '@angular/material';
import { CardComponent } from './forecast/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatDividerModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
