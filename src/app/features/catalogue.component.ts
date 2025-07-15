import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../core/services/product.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  animations: [
    trigger('fadeStagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0.95)' }),
            stagger(100, [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'scale(1)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})


export class CatalogueComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  searchTerm = ''; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.loading = false;
    });
  }

  // ✅ Filter products by search term (name or description)
  filteredProducts(): Product[] {
    if (!this.searchTerm.trim()) return this.products;

    const term = this.searchTerm.toLowerCase();
    return this.products.filter(
      product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }
}
