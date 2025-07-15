import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../core/services/cart.service';
import { Toast } from '../core/services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService, private toast: Toast) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increase(item: CartItem): void {
    this.cartService.updateQuantity(item.slug, item.quantity + 1);
  }

  decrease(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.slug, item.quantity - 1);
    } else {
      this.toast.warning('Minimum quantity is 1'); 
    }
  }

  remove(item: CartItem): void {
    this.cartService.removeFromCart(item.slug);
  }
}
