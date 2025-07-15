import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../core/services/cart.service';
import { Toast } from '../core/services/toast.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private toast: Toast
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartSnapshot();
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000).toString();
    this.cartService.clearCart();
    this.toast.success('Order placed successfully!'); // ✅ Toast on success
    this.router.navigate(['/success'], { queryParams: { id: orderId } });
  }
}
