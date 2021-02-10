import { Component, OnInit } from '@angular/core';
import { products } from '../data/products';
import { Util } from '../util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor(public util: Util) {
  }

  ngOnInit(): void {
  }


}
