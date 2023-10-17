import {AbstractSelling} from './AbstractSelling';
import {Product} from './Product';

export class SecondSelling extends AbstractSelling {
  private _quantityForDiscount: number;
  constructor(product: Product, quantity: number, quantityForDiscount: number) {
    super(product, quantity);
    this._quantityForDiscount = quantityForDiscount;
  }

  set setQuantityForDiscount(quantityForDiscount: number) {
    this._quantityForDiscount = quantityForDiscount;
  }

  get quantityForDiscount() {
    return this._quantityForDiscount;
  }

  override getPrice(): number {
    if (this._quantityForDiscount <= this._quantity) {
      return +(this._product.price * this._quantity * 0.9).toFixed(2);
    }
    return this._product.price * this._quantity;
  }
}
