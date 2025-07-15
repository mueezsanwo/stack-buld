import { CartService } from './cart.service';
import { Product } from './product.service';

describe('CartService', () => {
  let service: CartService;

  const testProduct: Product = {
    id: 1,
    name: 'Test Shirt',
    slug: 'test-shirt',
    price: 19.99,
    image: 'assets/images/shirt.jpg',
    description: 'Test product'
  };

  beforeEach(() => {
    service = new CartService();
    service.clearCart(); // reset state before each test
  });

  it('should add a product to the cart', () => {
    service.addToCart(testProduct);
    const cart = service.getCartSnapshot();
    expect(cart.length).toBe(1);
    expect(cart[0].slug).toBe('test-shirt');
  });

  it('should increase quantity if product is added again', () => {
    service.addToCart(testProduct);
    service.addToCart(testProduct);
    const cart = service.getCartSnapshot();
    expect(cart[0].quantity).toBe(2);
  });

  it('should remove product from cart', () => {
    service.addToCart(testProduct);
    service.removeFromCart('test-shirt');
    const cart = service.getCartSnapshot();
    expect(cart.length).toBe(0);
  });
});
