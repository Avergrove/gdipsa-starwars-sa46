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

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes) {
    this.toggleState(); 
    var itemId = this.item.url.match('^.*/([0-9]*)/$')[1];

    
    switch (this.item.category) {
      case 'people':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + itemId + ".jpg";
        break

      default:
        break;
    }
    
  }

  toggleState(){
    this.activeState = !this.activeState;
  }

}
