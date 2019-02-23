import { TestBed, inject, async } from '@angular/core/testing';

import { BookStaticAsyncDataService } from './book-static-async-data.service';
import { Book } from './book';
let srv;
describe('BookStaticAsyncDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStaticAsyncDataService]
    });
  });
  beforeEach(() => {
    srv = TestBed.get(BookStaticAsyncDataService);
  });

  it('should be created', () => {
    expect(srv).toBeTruthy();
  });

  describe('getBooks()', () => {
    it('should return the whole list of books with an Observable', async(() => {
      srv.getBooks().subscribe(bs => {
        expect(bs).toEqual(srv.staticBookData);
      });
      expect(srv).toBeTruthy();
    }));
  });
  describe('getBooks()', () => {
    it('should return the whole list of books with an Observable', inject(
      [BookStaticAsyncDataService],
      (service: BookStaticAsyncDataService) => {
        service
          .getBooks()
          .subscribe(bs => expect(bs).toBe(service.staticBookData));
      }
    ));
  });

  describe('getBookByIsbn(isbn)', () => {
    it('should return the first elemnt of data', inject(
      [BookStaticAsyncDataService],
      (service: BookStaticAsyncDataService) => {
        service
          .getBookByIsbn('ösladfh')
          .subscribe(b => expect(b).toBe(service.staticBookData[0]));
      }
    ));
  });

  describe('getBook(book)', () => {
    it('should return the book argument itself', inject(
      [BookStaticAsyncDataService],
      (service: BookStaticAsyncDataService) => {
        service
          .updateBook(service.staticBookData[1])
          .subscribe(b => expect(b).toBe(service.staticBookData[1]));
      }
    ));
  });

  describe('createBook(book)', () => {
    it('should return the book argument itself', inject(
      [BookStaticAsyncDataService],
      (service: BookStaticAsyncDataService) => {
        const book: Book = {
          ...service.staticBookData[1],
          isbn: '9183467198463',
          title: 'öksufg'
        };
        service.createBook(book).subscribe(b => expect(b.title).toBe('öksufg'));
      }
    ));

    it('should add the new book to the dataset', inject(
      [BookStaticAsyncDataService],
      (service: BookStaticAsyncDataService) => {
        const l = service.staticBookData.length;
        const book: Book = {
          ...service.staticBookData[1],
          isbn: '999888833388',
          title: 'Moin Moin'
        };
        service
          .createBook(book)
          .subscribe(b => expect(service.staticBookData.length).toBe(l + 1));
      }
    ));
  });
});
