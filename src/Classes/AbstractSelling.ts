import {Product} from './Product';

export abstract class AbstractSelling {
  protected _product: Product;
  protected _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  set product(product: Product) {
    this._product = product;
  }

  get product() {
    return this._product;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  abstract getPrice(): number;
  
  compare(product: AbstractSelling): number {
    if (product.getPrice() > this.getPrice()) return 1;
    if (product.getPrice() === this.getPrice()) return 0;
    return -1;
  }
}
