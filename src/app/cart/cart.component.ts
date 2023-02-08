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

  increment(item : Product){
    this.cartService.increment(item);
    this.setCart()
    this.setTotal()
  }
  decrement(item : Product){
    this.cartService.decrement(item);
    this.setCart()
    this.setTotal()
  }

  removeProductFromCart(item : Product){
    this.cartService.removeProductFromCart(item);
    this.setCart()
    this.setTotal()
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  setTotal() {
    this.total = this.cartService.getTotal();
  }
}
