import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  @Output() itemSelect = new EventEmitter();
  @Input() category : String;
  @Input() items : String[];

  activeState = false;

  constructor() { }

  ngOnInit() {
  }

  displayItem(item){
    this.itemSelect.emit(item);
    this.toggleState();
  }

  toggleState(){
    this.activeState = !this.activeState;
  }
}
