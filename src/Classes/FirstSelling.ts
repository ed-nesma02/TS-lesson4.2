import {AbstractSelling} from './AbstractSelling';
import {Product} from './Product';

export class FirstSelling extends AbstractSelling {
  constructor(product: Product, quantity: number) {
    super(product, quantity);
  }

  override getPrice(): number {
    return (this.product.infoPrice - 10) * this.quantity;
  }

  compare(product: AbstractSelling): number {
    if (product.getPrice()> this.getPrice()) return 1;
    if (product.getPrice() === this.getPrice()) return 0;
    return -1;
  }
}
