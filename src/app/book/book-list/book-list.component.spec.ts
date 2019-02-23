import { RouterTestingModule } from '@angular/router/testing';
import {
  BookStaticAsyncDataService as stubsrc,
  BookStaticAsyncDataService
} from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;
  let service: BookStaticAsyncDataService;
  let mySpy;

  // providers: [
  //   {
  //     provide: BookDataService,
  //     useClass: BookStaticAsyncDataService
  //   }
  // ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [BookDataService]
    }).compileComponents();
    service = TestBed.get(BookDataService);
    const srv = new BookStaticAsyncDataService();
    mySpy = spyOn(service, 'getBooks').and.returnValue(
      Observable.of(srv.staticBookData)
    );
  });

  beforeEach(() => {
    // create component and detect changes
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  fit('should recieve 3 Books', () => {
    expect(compiled.querySelectorAll('.book-row').length).toBe(3);
    expect(service.getBooks).toHaveBeenCalled();
  });

  it('should display the title of each book', () => {
    const list = compiled.querySelectorAll('.book-row>td>a');
    for (let i = 0; i < list.length; i++) {
      expect(list[i].innerHTML).toBe(service.staticBookData[i].title);
    }
  });

  it('should link to the edit page of each book', () => {
    const list = compiled.querySelectorAll('.book-row>td>a');
    for (let i = 0; i < list.length; i++) {
      expect(list[i].href).toBe(
        'http://localhost:9876/' + service.staticBookData[i].isbn
      );
    }
  });
});
