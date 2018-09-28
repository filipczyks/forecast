import { inject, TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let httpMock: HttpTestingController;
let service: WeatherService;

const expectedResult = [
  {
    temp: 10,
    humidity: 20,
    wind: 30,
    date: '2018-10-10',
    time: '00:00:00',
    icon: 'icon'
  }
];

const httpResponse = {
  city: {
    id: 1851632,
    name: 'Shuzenji',
    coord: {
      lon: 138,
      lat: 34
    }
  },
  country: 'JP',
  cod: '200',
  message: 0.0045,
  cnt: 38,
  list: [
    {
      'dt': 1406106000,
      'main': {
        'temp': 283,
        'temp_min': 298.77,
        'temp_max': 298.774,
        'pressure': 1005.93,
        'sea_level': 1018.18,
        'grnd_level': 1005.93,
        'humidity': 20,
        'temp_kf': 0.26
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': 'icon'
        }
      ],
      'clouds': {'all': 88},
      'wind': {'speed': 30, 'deg': 229.501},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-10-10 00:00:00'
    }
  ]
};

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=&appid=17fb125e8db0204cd5cdc395369446e1';

describe('WeatherService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [WeatherService]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(WeatherService);
      }
    );
    afterEach(() => {
      httpMock.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('getForecastByCity returns properly mapped results', () => {
      service.getForecastByCity('').subscribe(data => {
        expect(data).toEqual(expectedResult);
      });

      const req = httpMock.expectOne(API_URL);
      expect(req.request.method).toEqual('GET');
      req.flush(httpResponse);
    });

  it('getForecastByLatLon returns properly mapped results', () => {
    service.getForecastByCity('').subscribe(data => {
      expect(data).toEqual(expectedResult);
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(httpResponse);
  });
  }
);
