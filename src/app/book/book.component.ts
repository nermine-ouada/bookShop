import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from 'src/app/cart/cart.service';
import { BooksService } from '../books/books.service';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() updateBookList = new EventEmitter<null>();
  isUpdate: boolean=false;

  constructor(private cartService: CartService, private booksService: BooksService, private router: Router) { }
isSoldOut:boolean=false;
  ngOnInit(): void {
    if(this.book.amount==0){
      this.isSoldOut=true;
    }
    
   }

  i: number = 0;
  isInCart: boolean = false;
  subDisabled: boolean = false;
  addDisabled: boolean = false;
  isDisabled: boolean = true;
  

  
  addition() {
    if (this.i < this.book.amount) {
      this.i++;
    }
  }

  substract() {
    if (this.i > 0) {
      this.i--;
    }
  }

  addToCart() {
    if (this.i > 0) {
      this.isInCart = true;
      this.book.amount = this.book.amount - this.i
      this.router.navigate(['cart'],{queryParams:{ i:this.i}})
      this.booksService.updateAmount(this.book).subscribe();
      this.cartService.add(this.book);

    

    }
  }
  removeFromCart() {
    this.isInCart = false;
    this.book.amount =this.book.amount  + this.i
    this.booksService.updateAmount(this.book)
    this.cartService.remove(this.book);
    
  }
  deleteBook() {
    this.booksService.deleteBook(this.book.id).subscribe(
      data => {
        this.updateBookList.emit();
      }
    );
    
  }
  updateBook(){
    
    this.isUpdate=true;
    this.router.navigate(['BookForm'],{queryParams:{ id:this.book.id}})
    this.booksService.updateBook(this.book)
  }
 
}
