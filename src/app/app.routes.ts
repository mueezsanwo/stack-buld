import { Routes } from '@angular/router';
import { CatalogueComponent } from './features/catalogue.component';
import { ProductComponent } from './features/product.component';
import { CartComponent } from './features/cart.component';
import { CheckoutComponent } from './features/checkout.component';
import { SuccessComponent } from './features/checkout/success.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
    data: { animation: 'CataloguePage' }
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
    data: { animation: 'ProductPage' }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { animation: 'CartPage' }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { animation: 'CheckoutPage' }
  },
  {
    path: 'success',
    component: SuccessComponent,
    data: { animation: 'SuccessPage' }
  },
  
  { path: '**', redirectTo: '', data: { animation: 'NotFoundPage' } }
];
