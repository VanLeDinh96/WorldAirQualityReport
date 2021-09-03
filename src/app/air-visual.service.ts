import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirVisualService {
  constructor(private http: HttpClient) {}

  apiKey = 'cf8ed71b-0b2b-4019-af5b-c142ec08559a';
  urlNearestCity =
    'http://api.airvisual.com/v2/nearest_city';
  urlLargestPopulation =
    'https://world-population.p.rapidapi.com/allcountriesname';

  getNearestCity(): Observable<any> {
    return this.http.get<any>(this.urlNearestCity, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Host': 'api.airvisual.com',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      },
      params:{
        'key': 'cf8ed71b-0b2b-4019-af5b-c142ec08559a',
        'x-forwarded-for': '27.102.113.160'
      }
    });
  }

  getLargestPopulation(): Observable<any> {
    return this.http.get<any>(this.urlLargestPopulation, {
      headers: {
        'x-rapidapi-host': 'world-population.p.rapidapi.com',
        'x-rapidapi-key': 'e66e232d7cmshc1b666e29e3d803p1846ebjsnd4e0a3ac621e'
      }
    });
  }

  // getAllCountries(): Observable<any> {
  //   // return this.http.get<any>()
  // }
}
