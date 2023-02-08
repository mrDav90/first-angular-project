import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../data/products';
import { products } from '../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product : Product | undefined
  constructor(
    private route : ActivatedRoute  ,
    private cartService : CartService
  ) {

  }

  ngOnInit() {
    const params = this.route.snapshot.paramMap
    const productId = Number(params.get("productId"))
    this.product = products.find((element)=> element.id === productId )
  }

  addProductToCart(item : Product) {
    this.cartService.addToCart(item)
  }

}
