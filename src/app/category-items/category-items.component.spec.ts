import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemsComponent } from './category-items.component';

describe('CategoryItemsComponent', () => {
  let component: CategoryItemsComponent;
  let fixture: ComponentFixture<CategoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
