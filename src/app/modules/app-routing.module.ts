import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';

// canActivateChild: [AuthGuard],
const routes: Routes = [
  {
    path: '',  pathMatch: 'full', component: InventoryComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'inventory', component: InventoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
