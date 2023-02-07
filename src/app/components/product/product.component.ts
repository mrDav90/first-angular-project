import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/data/products';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product ?: Product

  constructor(
    private cartService  : CartService
  ){

  }


  addProductToCart(product : Product) {
    this.cartService.addToCart(product);
  }
}
