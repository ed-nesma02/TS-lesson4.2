import {AbstractSelling} from './AbstractSelling';
import {Product} from './Product';

export class SecondSelling extends AbstractSelling {
  private quantityForDiscount: number;
  constructor(product: Product, quantity: number, quantityForDiscount: number) {
    super(product, quantity);
    this.quantityForDiscount = quantityForDiscount;
  }

  set setQuantityForDiscount(quantityForDiscount: number) {
    this.quantityForDiscount = quantityForDiscount;
  }

  get getQuantityForDiscount() {
    return this.quantityForDiscount;
  }

  override getPrice(): number {
    if (this.quantityForDiscount <= this.quantity) {
      return +(this.product.infoPrice * this.quantity * 0.9).toFixed(2);
    }
    return this.product.infoPrice * this.quantity;
  }

  compare(product: AbstractSelling): number {
    if (product.getPrice() > this.getPrice()) return 1;
    if (product.getPrice() === this.getPrice()) return 0;
    return -1;
  }
}
