import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/data/products';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  

  constructor(
    private cartService : CartService
  ){

  }

  cart : any
  ngOnInit(){
    this.cart = this.cartService.getCart()
  }


}
