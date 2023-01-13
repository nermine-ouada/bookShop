import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookForm } from '../types/Book';

@Injectable()
export class BooksService {

  baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.baseUrl + 'book');
  }

  addBook(book: BookForm) {
    return this.http.post(this.baseUrl + 'book', book);

  }
  updateAmount(book: Book) {

    return this.http.put(this.baseUrl + 'book/'+ book.id, book);

  }
  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + 'book/' +id );
  }
  updateBook(book:Book){
    return this.http.put(this.baseUrl + 'book/'+ book.id, book);
  }

  getBookById(id: number) {
    return this.http.get(this.baseUrl+'book/'+id)
  }

}
