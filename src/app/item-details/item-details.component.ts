import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item;
  imageUrl: String;
  activeState = false;
  debug: string;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes) {
    this.debug = changes.previousValue;
    var itemId = this.item.url.match('^.*/([0-9]*)/$')[1];

    switch (this.item.category) {
      case 'people':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + itemId + ".jpg";
        break

      case 'film':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/films/" + itemId + ".jpg";
        break;

      case 'species':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/species/" + itemId + ".jpg";
        break;

      case 'starship':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/starships/" + itemId + ".jpg";
        break;

      case 'vehicle':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/vehicles/" + itemId + ".jpg";
        break;

      case 'planet':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/planets/" + itemId + ".jpg";
        break;


      default:
        break;
    }


  }

  onPageArrival(){
    this.toggleState();
  }

  toggleState() {
    this.activeState = !this.activeState;
  }

}
