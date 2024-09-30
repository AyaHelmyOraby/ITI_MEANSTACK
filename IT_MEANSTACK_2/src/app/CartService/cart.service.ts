// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Cart items:', this.cartItems); // For debugging
  }

  getCartItems() {
    return this.cartItems;
  }
}
