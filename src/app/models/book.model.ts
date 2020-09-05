import { isPrimitive } from 'util';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public year: number,
    public description: string,
    public imagePath: string,
    public salesCount: number,
    public categoryId: number
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.description = description;
    this.imagePath = imagePath;
    this.salesCount = salesCount;
    this.categoryId = categoryId; //!Hardcoding
  }
}
