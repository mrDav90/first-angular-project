import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  

  constructor(
    private cartService : CartService
  ){

  }

  cart= this.cartService.getCart()



}
