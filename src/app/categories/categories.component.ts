import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    new Category(1, 'Fantasy'),
    new Category(2, 'Adventure'),
    new Category(3, 'Romance'),
    new Category(4, 'Mystery'),
    new Category(5, 'Horror'),
    new Category(6, 'Thriller'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
