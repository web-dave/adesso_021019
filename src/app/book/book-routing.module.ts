import { NgModule }              from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

export const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  },{
    path: 'new',
    component: BookNewComponent
  }, {
    path: ':isbn',
    component: BookDetailComponent
  }, {
    path: ':isbn/edit',
    component: BookEditComponent,
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule {}
