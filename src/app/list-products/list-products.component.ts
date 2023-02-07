import { Component } from '@angular/core';
import { Product } from '../data/products';
import { products } from '../data/products';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
    products = [...products]
}
