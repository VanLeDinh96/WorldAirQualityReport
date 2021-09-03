import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NearestCityComponent } from './nearest-city/nearest-city.component';
import { LargestPopulationComponent } from './largest-population/largest-population.component';
import { PopulationAllCountriesComponent } from './population-all-countries/population-all-countries.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, NearestCityComponent, LargestPopulationComponent, PopulationAllCountriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
