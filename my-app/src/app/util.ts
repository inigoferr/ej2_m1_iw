import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Util {
    constructor() { }

    addPizza(product): void {
        let orders = JSON.parse(localStorage.getItem('orders'));
        if (!orders) {
            orders = [];
        }

        // Check if that Pizza was already added
        if (this.obtainNumPizza(orders, product)) {
            orders.push(product);
        }

        localStorage.setItem('orders', JSON.stringify(orders));
        alert('Pizza ' + product.name + ' añadida a tu pedido.');
    }

    private obtainNumPizza(orders, product): boolean {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].id == product.id) {
                orders[i].quantity += 1;
                return false;
            }
        }
        product.quantity = 1;
        return true;
    }

    removePizza(product): void {
        let orders = JSON.parse(localStorage.getItem('orders'));

        orders = this.removeOnePizza(orders, product);

        if (orders.length > 0) {
            localStorage.setItem('orders', JSON.stringify(orders));
        } else {
            localStorage.removeItem('orders');
        }
    }

    private removeOnePizza(orders, product): void {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].id == product.id) {
                if (orders[i].quantity == 1) {
                    orders = orders.filter(obj => obj != orders[i]);
                } else {
                    orders[i].quantity -= 1;
                }
            }
        }
        return orders;
    }


}