import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;
  let service: BookStaticAsyncDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: BookDataService,
          useClass: BookStaticAsyncDataService
        }
      ]
    }).compileComponents();
    service = TestBed.get(BookDataService);
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

  it('should recieve 3 Books', () => {
    expect(compiled.querySelectorAll('.book-row').length).toBe(3);
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
