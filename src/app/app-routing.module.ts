import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path : "" , component : HomeComponent 
  } , 
  {
    path : "shop" , component : ListProductsComponent 
  } , 
  {
    path : "productDetails/:productId" , component : ProductDetailsComponent
  } ,
  {
    path : "cart" , component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
