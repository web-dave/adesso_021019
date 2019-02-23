import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { DebugElement, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDetailComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(inject([BookDataService], (service: BookDataService) => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should call the BookData service with the correct ISBN', () => {
    expect(true).toBeFalsy();
  });

  it('should load the book to the component to component.book', () => {
    expect(true).toBeFalsy();
  });

});
