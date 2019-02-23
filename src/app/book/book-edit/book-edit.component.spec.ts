import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookEditComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [{ provide: BookDataService, useClass: BookStaticAsyncDataService }]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the isbn of the loaded book', () => {
    expect(true).toBeFalsy();
  });

  it('should validate that title is required and show an error message', fakeAsync(() => {
    expect(true).toBeFalsy();
  }));

  it('should submit the whole form on click on the submit button', () => {
    expect(true).toBeFalsy();
  });
});
