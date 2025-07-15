import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'mini-commerce-cart';

  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  private loadCart(): CartItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveCart(cart: CartItem[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
  }

  addToCart(product: Product) {
    const cart = this.cartSubject.value;
    const existing = cart.find(item => item.slug === product.slug);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.saveCart(cart);
    this.cartSubject.next(cart);
  }

  removeFromCart(slug: string) {
    const cart = this.cartSubject.value.filter(item => item.slug !== slug);
    this.saveCart(cart);
    this.cartSubject.next(cart);
  }

  updateQuantity(slug: string, quantity: number) {
    const cart = this.cartSubject.value.map(item =>
      item.slug === slug ? { ...item, quantity } : item
    );
    this.saveCart(cart);
    this.cartSubject.next(cart);
  }

  clearCart() {
    this.saveCart([]);
    this.cartSubject.next([]);
  }

  getCartSnapshot(): CartItem[] {
    return this.cartSubject.value;
  }
}
