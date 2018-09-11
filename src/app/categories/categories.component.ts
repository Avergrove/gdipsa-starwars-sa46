import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],



})
export class CategoriesComponent implements OnInit {

  @Output() categorySelect = new EventEmitter();
  activeState = true;  

  constructor() { }

  ngOnInit() {
  }

  displayItems(arg) {
    this.categorySelect.emit(arg);
    this.toggleState();
  }

  toggleState(){
    this.activeState = !this.activeState;
  }

}
