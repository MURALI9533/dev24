import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DataService } from '../services/data.service';
import { AuthService } from '../Auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from '../interceptors/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [
    DataService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
