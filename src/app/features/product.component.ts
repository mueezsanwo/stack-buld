import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../core/services/product.service';
import { CartService } from '../core/services/cart.service';
import { Toast } from '../core/services/toast.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toast: Toast
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.product = this.productService.getProductBySlug(slug);

      if (!this.product) {
        this.toast.error('Product not found');
      }
    } else {
      this.toast.error('Invalid product URL');
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.toast.success(`${this.product.name} added to cart!`);
    } else {
      this.toast.error('Failed to add item to cart');
    }
  }
}
