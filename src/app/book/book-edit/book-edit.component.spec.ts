import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

fdescribe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let compiled;
  let service: BookStaticAsyncDataService;
  let mySpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookEditComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: Observable.of({ isbn: 'Moin' }), snapshot: {} }
        },
        { provide: BookDataService, useClass: BookStaticAsyncDataService }
      ]
    }).compileComponents();
    service = TestBed.get(BookDataService);
    mySpy = spyOn(service, 'updateBook').and.callThrough();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement as HTMLElement;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the isbn of the loaded book', () => {
    const isbn = compiled.querySelector('[name="isbn"]');
    expect(isbn.value).toBe(service.staticBookData[0].isbn);
  });

  it('should validate that title is required and show an error message', fakeAsync(() => {
    const title = compiled.querySelector('[name="title"]');
    title.value = '';
    title.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    expect(compiled.querySelector('[name="title"].ng-invalid')).toBeTruthy();
  }));

  it('should submit the whole form on click on the submit button', () => {
    const btn = compiled.querySelector('.btn-success');
    btn.click();
    expect(mySpy).toHaveBeenCalledWith(service.staticBookData[0].isbn, {
      isbn: service.staticBookData[0].isbn,
      title: service.staticBookData[0].title,
      author: service.staticBookData[0].author
    });
  });
});
