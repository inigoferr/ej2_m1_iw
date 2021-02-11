import { Component, OnInit } from '@angular/core';
import { Util } from '../util';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any;

  displayedColumns: string[] = ['name', 'price', 'quantity', 'actions'];

  constructor(public util: Util) {
    this.orders = this.getOrders();
  }

  ngOnInit(): void {
  }

  /* Get Orders */
  getOrders() {
    this.orders = JSON.parse(localStorage.getItem('orders'));
    if (!this.orders) {
      this.orders = [];
    }
    return this.orders;
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.orders.map(t => t).reduce((acc, value) => acc + value.price * value.quantity, 0);
  }

  /* addPizza */
  addPizza(product) {
    this.util.addPizza(product);
    this.getOrders();
  }

  /* removePizza */
  removePizza(product) {
    this.util.removePizza(product);
    this.getOrders();
  }

  /* End Order */
  endOrder() {
    if (this.orders.length == 0) {
      alert('No has añadido ninguna pizza...');
    } else {
      this.cleanStorage();
      alert('Pedido recibido.');
    }
  }

  cleanStorage() {
    localStorage.removeItem('orders');
  }

}
