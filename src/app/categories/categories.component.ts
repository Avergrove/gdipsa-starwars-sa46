import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() categorySelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayItems(arg){
    this.categorySelect.emit(arg);
  }


}
