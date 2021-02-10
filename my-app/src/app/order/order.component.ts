import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any;

  displayedColumns: string[] = ['name', 'price', 'quantity'];

  constructor() {
    this.orders = JSON.parse(localStorage.getItem('orders'));
    if (!this.orders) {
      this.orders = [];
    }
  }

  ngOnInit(): void {
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.orders.map(t => t).reduce((acc, value) => acc + value.price * value.quantity, 0);
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
