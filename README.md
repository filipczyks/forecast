# Forecast

Forecast is simple app showing 5 day weather forecast depending on your localization or given city name.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
To build this project you will need JS package manager as npm or yarn.

## Install
First run `yarn install` to fetch and install project dependencies.

## Development server

Run `yarn startdev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
There are no e2e tests for this project.

## Thought process
I have picked Angular as a framework for this solution as it's a tool I am most familiar with for developing JavaScript applications.

Forecast is one-tier application. Due to it's simplicity there was no need to split fetching data and presenting it to two services.

I have used [5 days weather](https://openweathermap.org/forecast5) endpoint instead of proposed [16 day forecasts](https://openweathermap.org/forecast16). Latter is not free. I have decided to leave forecast on original resoultion (one item is 3h period) as I think this doesn't lower user experience.

## Tradeoffs
No real Data Transfer Object's are being used for pushing weather data through layers. Data is being held in plain JS objects.

Some of logic (splitting date) that should happen in Presenter layer is done within WeatherService.

Only most crucial part - receiving and parsing data from OpenWeather API is covered by unit tests.

## Future features
Features to be implemented in future:
- having charts showing change of tempeature, humidity, wind over the time
- add some interactivity, so user can see forecast for next day in the best detail, and then navigate to forecast for other days
- add caching of forecast data 

## Tech debt corrections:
- add e2e tests for app
- create DTO's for data received from WeatherService to replace JS objects
- add more unit tests for Components
