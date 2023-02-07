import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from 'src/app/data/products';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem  : Product | undefined

  constructor(
    private cartService : CartService
  ){}


  increment(item : Product){
    this.cartService.increment(item);
  }
  decrement(item : Product){
    this.cartService.decrement(item);
  }
}
