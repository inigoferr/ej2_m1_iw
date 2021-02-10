import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePizzaComponent } from './create-pizza/create-pizza.component';
import { OrderComponent } from './order/order.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'createPizza', component: CreatePizzaComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
