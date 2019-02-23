import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, async, inject} from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookNewComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [{ provide: BookDataService, useClass: BookStaticAsyncDataService }]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  // Tip: This tests based on reactive-forms, take a look at the BookNew Class (form attribute)
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when initialized', () => {
    expect(true).toBeFalsy();
  });

  it('should require title otherwise mark form as invalid', () => {
    expect(true).toBeFalsy();
  });

  it('should be valid if all values are valid', () => {
    expect(true).toBeFalsy();
  });

  it('should call BookData.createBook on submit', inject([BookDataService], (service: BookDataService) => {
    expect(true).toBeFalsy();
  }));
});
