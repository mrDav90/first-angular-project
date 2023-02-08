import { Injectable, OnInit } from '@angular/core';
import { Product } from './data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Product[] = JSON.parse(sessionStorage.getItem("cart") as any) ||  [] ;
  constructor() { 
   
  }

  
  addToCart(product: Product) {
    if (this.cart.length === 0) {
      this.cart.push(product);
      window.alert("Produit ajouté au panier");
      sessionStorage.setItem("cart" , JSON.stringify(this.cart))
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
        sessionStorage.setItem("cart" , JSON.stringify(this.cart))
      }
    }
  }

  getCart() {
      return this.cart; 
  }

  removeProductFromCart(product : Product){
    this.cart = [...this.cart].filter((element)=> element.id !== product.id);
    sessionStorage.setItem("cart" , JSON.stringify(this.cart));
    window.alert("Produit retiré du panier");
  }

  clearCart() {
    this.cart = [] ;
    sessionStorage.setItem("cart" , JSON.stringify([]))
    return this.cart;
  }

  increment(product : Product){
    this.cart.forEach(element => {
        if (element.id === product.id) {
            element.quantity +=1;
        }
    });
    sessionStorage.setItem("cart" , JSON.stringify(this.cart))   
  }

  decrement(product : Product){
    this.cart.forEach(element => {
        if (element.id === product.id) {
          if (product.quantity > 1) {
              element.quantity -= 1;
          }
        }
    }); 
    sessionStorage.setItem("cart" , JSON.stringify(this.cart))
  }

  getTotal() {
    return this.cart.reduce((currentValue  , acc ) => currentValue + (acc.quantity * acc.price ) , 0);
  }
}
