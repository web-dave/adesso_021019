import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';


describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    // create component and detect changes
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should recieve 3 Books', () => {
    expect(true).toBeFalsy();
  });

  it('should display the title of each book', () => {
    expect(true).toBeFalsy();
  });

  it('should link to the edit page of each book', () => {
    expect(true).toBeFalsy();
  });
});
