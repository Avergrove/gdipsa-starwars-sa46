import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleMeta, FilmMeta , SpeciesMeta, StarshipMeta, VehicleMeta, PlanetMeta} from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';

  category = "";
  items = [];

  constructor(private http: HttpClient) { };

  loadCategory($event) {
    this.category = $event;
    this.items = [];

    switch ($event) {
      case "Characters":
        this.http.get<PeopleMeta>('https://swapi.co/api/people/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;

      case "Films":
        this.http.get<FilmMeta>('https://swapi.co/api/films/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;


      case "Species":
        this.http.get<SpeciesMeta>('https://swapi.co/api/species/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;


      case "Starships":
        this.http.get<StarshipMeta>('https://swapi.co/api/starships/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;


      case "Vehicles":
        this.http.get<VehicleMeta>('https://swapi.co/api/vehicles/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;


      case "Planets":
        this.http.get<PlanetMeta>('https://swapi.co/api/planets/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element);
          });
        })
        break;

      default:
        break;
    }

  }

}
