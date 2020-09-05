import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { CategoryComponent } from './categories/category/category.component';
const appRoutes: Routes = [
  // { path: '', component: CategoriesComponent },  //TODO HomeComponent
  { path: 'categories', component: CategoriesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'categories/:id/books', component: BooksComponent },
  { path: 'categories/:id', component: CategoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CategoriesComponent,
    BooksComponent,
    BookComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)], //AppRoutingModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
