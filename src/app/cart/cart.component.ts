import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books/books.service';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit{
i:number=0;
  constructor(private cartService: CartService, private booksService:BooksService,private route: ActivatedRoute) { }
ngOnInit(){
this.route.queryParams.subscribe(param=> this.i=param['i'])
    
  }
  
 



  

  getCart() {
    return this.cartService.get();
  }
}
