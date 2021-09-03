import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirVisualService } from '../air-visual.service';

@Component({
  selector: 'nearest-city',
  templateUrl: './nearest-city.component.html',
  styleUrls: ['./nearest-city.component.css']
})
export class NearestCityComponent {
  constructor(private _api: AirVisualService) {}

  totalPopulation = 0;

  ngOnInit(): void {
    console.log('daf');
    this._api.getNearestCity().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    });
  }
}
