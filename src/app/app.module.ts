import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from "./auth/auth.module";
import { HttpClient } from "node-angular-http-client";
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
    declarations:[AppComponent, CartComponent, LoginComponent, RegisterComponent, BookFormComponent],  
    imports:[BrowserModule, FormsModule,BooksModule,AppRoutingModule,AuthModule, HttpClientModule],
    bootstrap:[AppComponent],
   
})
export class AppModule{
}