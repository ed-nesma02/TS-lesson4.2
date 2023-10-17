import {AbstractSelling} from './AbstractSelling';
import {Product} from './Product';

export class FirstSelling extends AbstractSelling {
  constructor(product: Product, quantity: number) {
    super(product, quantity);
  }

  override getPrice(): number {
    return (this._product.price - 10) * this._quantity;
  }
}
