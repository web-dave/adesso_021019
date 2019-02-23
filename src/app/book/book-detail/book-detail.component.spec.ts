import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { DebugElement, Component, Directive, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

fdescribe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let service: BookDataService;
  let mySpy;
  const book = {
    title: 'Design Patterns',
    subtitle: 'Elements of Reusable Object-Oriented Software',
    isbn: '978-0-20163-361-0',
    abstract: '...',
    numPages: 395,
    author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    publisher: {
      name: 'Addison-Wesley',
      url: 'http://www.addison-wesley.de/'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: BookDataService,
          useClass: BookStaticAsyncDataService
        },
        {
          provide: ActivatedRoute,
          useValue: { params: Observable.of({ isbn: book.isbn }), snapshot: {} }
        }
      ]
    }).compileComponents();
    service = TestBed.get(BookDataService);
    mySpy = spyOn(service, 'getBookByIsbn').and.returnValue(
      Observable.of(book)
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the BookData service with the correct ISBN', () => {
    expect(mySpy).toHaveBeenCalledWith(book.isbn);
  });

  it('should load the book to the component to component.book', () => {
    expect(component.book).toBe(book);
  });
});
