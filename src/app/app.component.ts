import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleMeta, FilmMeta , SpeciesMeta, StarshipMeta, VehicleMeta, PlanetMeta} from './model'
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars';

  category = "";
  items = [];
  item;


  @ViewChild('categories') categories: CategoriesComponent;
  @ViewChild('categoryItems') categoryItems: CategoryItemsComponent;
  @ViewChild('itemDetails') itemDetails: ItemDetailsComponent;
  canBack = false;
  appPage = 1;


  constructor(private http: HttpClient) { };

  loadCategory($event) {
    this.category = $event;
    this.items = [];

    switch ($event) {
      case "Characters":
        this.http.get<PeopleMeta>('https://swapi.co/api/people/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "people";
            this.items.push(element);
          });
        })
        break;

      case "Films":
        this.http.get<FilmMeta>('https://swapi.co/api/films/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "film"
            this.items.push(element);
          });
        })
        break;


      case "Species":
        this.http.get<SpeciesMeta>('https://swapi.co/api/species/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "species"
            this.items.push(element);
          });
        })
        break;


      case "Starships":
        this.http.get<StarshipMeta>('https://swapi.co/api/starships/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "starship";
            this.items.push(element);
          });
        })
        break;


      case "Vehicles":
        this.http.get<VehicleMeta>('https://swapi.co/api/vehicles/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "vehicle";
            this.items.push(element);
          });
        })
        break;


      case "Planets":
        this.http.get<PlanetMeta>('https://swapi.co/api/planets/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "planet";
            this.items.push(element);
          });
        })
        break;

      default:
        break;
    }

    // Handle page metainfo
    this.canBack = true;
    this.appPage++;

  }

  loadItem($event){
    this.item = $event;
    this.appPage++;
  }

  // Goes back one page.
  pageBack(){

    if(this.appPage == 2){
      this.categories.toggleState();
      this.categoryItems.toggleState();
    }

    else if(this.appPage == 3){
      this.categoryItems.toggleState();
      this.itemDetails.toggleState();
    }

    this.appPage--;
    if(this.appPage <= 1){
      this.canBack = false;
    }
  }

}
