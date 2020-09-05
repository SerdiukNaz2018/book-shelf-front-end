import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.books = this.books.filter(function (item) {
          return item.categoryId == params['id'];
        });
      }
    });
  }

  books: Book[] = [
    new Book(
      1,
      'Officially dead',
      2017,
      "It's about crime",
      'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/7/5/75_48.jpg',
      120,
      1
    ),
    new Book(
      2,
      'Rich dad poor dad',
      1980,
      "It's about business",
      'https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg',
      120_000,
      2
    ),
  ];
}
