import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './mycomponent/catalogue/catalogue.component';
import { CartComponent } from './mycomponent/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutPageComponent } from './mycomponent/checkout-page/checkout-page.component';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CartComponent,
    CheckoutPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
