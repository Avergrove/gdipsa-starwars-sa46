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
        this.items = this.getItems("Characters");

      default:
        break;
    }
  }

  getItems(category){

    var jsonItems = [];

    this.http.get('https://swapi.co/api/people/').subscribe((data) => {
      data.results.forEach(function (element) {
        jsonItems.push(element.name);
      });
    })   
    
    return jsonItems;
  }

}
