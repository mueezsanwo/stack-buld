import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly STORAGE_KEY = 'mini-commerce-products';
  private readonly DATA_URL = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      return of(JSON.parse(cached));
    } else {
      return this.http.get<Product[]>(this.DATA_URL).pipe(
        tap(data => localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))),
        catchError(err => {
          console.error('Failed to load products:', err);
          return of([]); // return empty array on error
        })
      );
    }
  }

  getProductBySlug(slug: string): Product | null {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (!cached) return null;
    const products: Product[] = JSON.parse(cached);
    return products.find(p => p.slug === slug) || null;
  }
}
