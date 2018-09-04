import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  @Input() category : String;
  @Input() items : String[];

  constructor() { }

  ngOnInit() {
  }

  loadCategory($event){
    console.log("Running event");
  }


}
