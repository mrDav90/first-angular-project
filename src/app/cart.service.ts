import { Injectable, OnInit } from '@angular/core';
import { Product } from './data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
 
  cart : Product[] = [] ;
  
  addToCart(product: Product) {
    if (this.cart.length === 0) {
      this.cart.push(product);
      window.alert("Produit ajouté au panier");
    }
    else
    {
      let k = 0;
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === product.id) {
          k+=1;
        }
      }

      if (k>0) {
        window.alert("Ce produit est déja disponible dans le panier!");
      }
      else{
        this.cart.push(product)
        window.alert("Produit ajouté au panier");
      }
    }
  }

  getCart() {
      return this.cart; 
  }

  clearCart() {
    this.cart = [] ;
    return this.cart;
  }

  increment(product : Product){
      this.cart.forEach(element => {
          if (element.id === product.id) {
              element.quantity +=1;
          }
      });
      
  }

  decrement(product : Product){
     this.cart.forEach(element => {
          if (element.id === product.id) {
            if (product.quantity > 1) {
                element.quantity -= 1;
            }
          }
      }); 

  }

  getTotal() {
    return this.cart.reduce((currentValue  , acc ) => currentValue + (acc.quantity * acc.price ) , 0);
  }
}
