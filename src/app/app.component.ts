import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';

  category = "";
  items = ["Leia", "Chewy", "Han"]

  loadCategory($event){
    this.category = $event;
     
    switch($event){
      case "Characters":
        

      default:
        break;
    }

    // Get all people from http https://swapi.co/api/people/
  }
}
