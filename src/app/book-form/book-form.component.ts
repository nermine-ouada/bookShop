import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books/books.service';
import { Book, BookForm } from '../types/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  constructor(private booksService: BooksService,private router:Router, private route: ActivatedRoute) { }
  @Input() book: Book = {} as Book;
  form: BookForm = {
    name: '',
    author: '',
    image: '',
    price:0,
    amount:0,

  };

  updateMode: boolean = false;
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if(param['id']) {
        this.booksService.getBookById(parseInt(param['id'])).subscribe((book: any) => {
        this.book = book;
        this.form = book;
        this.updateMode = true; })
      }
      
     
    })
  }

updateBook(){
  this.form= this.book;
  this.booksService.updateBook(this.book).subscribe()

}

  addBook(){
    if(this.updateMode) {
      this.updateBook();
    } else {
      this.booksService.addBook(this.form).subscribe();
     
    }
    this.router.navigate(['']);
  }


}
