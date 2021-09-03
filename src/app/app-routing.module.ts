import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearestCityComponent } from './nearest-city/nearest-city.component';
import { LargestPopulationComponent } from './largest-population/largest-population.component';
import { PopulationAllCountriesComponent } from './population-all-countries/population-all-countries.component';

const routes: Routes = [
  {
    path: 'nearest-city',
    component: NearestCityComponent,
  },
  {
    path: 'largest-population',
    component: LargestPopulationComponent,
  },
  {
    path: 'population-all-countries',
    component: PopulationAllCountriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
