import { Component, EventEmitter } from '@angular/core';
import { Input  , Output } from '@angular/core';
import { Product } from 'src/app/data/products';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem  : Product | undefined
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() removeProductFromCart = new EventEmitter();


  constructor(
    private cartService : CartService
  ){}

  cart = this.cartService.getCart();
  
  // increment(item : Product){
  //   this.cartService.increment(item);
  // }
  // decrement(item : Product){
  //   this.cartService.decrement(item);
  // }

  // removeProductFromCart(item : Product){
  //   this.cartService.removeProductFromCart(item)
  // }
}
