import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    switch ($event) {
      case "Characters":
        this.http.get('https://swapi.co/api/people/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.name);
          });
        })
        break;

      case "Films":
        this.http.get('https://swapi.co/api/films/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.title);
          });
        })
        break;


      case "Species":
        this.http.get('https://swapi.co/api/species/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.name);
          });
        })
        break;


      case "Starships":
        this.http.get('https://swapi.co/api/starships/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.name);
          });
        })
        break;


      case "Vehicles":
        this.http.get('https://swapi.co/api/vehicles/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.name);
          });
        })
        break;


      case "Planets":
        this.http.get('https://swapi.co/api/planets/').subscribe((data) => {
          data.results.forEach((element, index) => {
            this.items.push(element.name);
          });
        })
        break;



      default:
        break;
    }
  }

}
