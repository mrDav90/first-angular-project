import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/data/products';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  constructor(
    private cartService : CartService
  ) {}

  cart = this.cartService.getCart();
  total = this.cartService.getTotal() ;

  clearCart(){
    this.cart = this.cartService.clearCart();
    //window.alert("Panier vidé")
  }
}
