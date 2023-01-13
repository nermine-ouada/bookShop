import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) {

  }

  books: Book[] = [];


  ngOnInit(): void {
   
    this.getBookList();

  }

  getBookList() {
    this.booksService.getBooks().subscribe((books: any) => { this.books = books; })
    
  }

  isDisabled: boolean = false;

  isShowing: boolean = true;

}
