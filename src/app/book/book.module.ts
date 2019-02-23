import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpModule } from '@angular/http';
import { BookRoutingModule } from './book-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';


@NgModule({
  imports: [
    BookRoutingModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  providers: [
    BookDataService
  ]
})
export class BookModule { }
