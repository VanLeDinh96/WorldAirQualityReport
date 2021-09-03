import { Component, Input } from '@angular/core';
import { AirVisualService } from '../air-visual.service';

@Component({
  selector: 'largest-population',
  templateUrl: './largest-population.component.html',
  styleUrls: ['./largest-population.component.css']
})
export class LargestPopulationComponent  {
  constructor(
    private _api: AirVisualService
  ) {}

  totalPopulation = 0;

  ngOnInit(): void {
    // this._api.getPopulation().subscribe(data => {
    //   this.totalPopulation = data.body.world_population;
    //   console.log(this.totalPopulation);
    // });
  }
}
