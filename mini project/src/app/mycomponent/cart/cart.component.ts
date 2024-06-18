import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

interface Product {
  name: string;
  image: string;
  weight: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  estimatedDeliveryDate: string = '';

  constructor(
    public cartService: CartService,
    ) { }

  ngOnInit(): void {
    this.calculateEstimatedDeliveryDate();
  }

  getTotal(): number {
    return this.cartService.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  calculateEstimatedDeliveryDate(): void {
    const currentDate = new Date();
    const estimatedDeliveryDate = new Date(currentDate.getTime() + (5 * 24 * 60 * 60 * 1000)); // Adding 5 days
    this.estimatedDeliveryDate = estimatedDeliveryDate.toLocaleDateString();
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  updateQuantity(product: Product, quantity: number): void {
    const currentQuantity = this.cartService.getProductQuantity(product);
    const newQuantity = currentQuantity + quantity;

    if (newQuantity <= 0) {
      this.cartService.removeFromCart(product);
    } else {
      this.cartService.updateQuantity(product, newQuantity);
    }
  }

 
}
