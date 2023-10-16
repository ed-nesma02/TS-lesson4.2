import {Product} from './Product';

export abstract class AbstractSelling {
  protected product: Product;
  protected quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  set setProduct(product: Product) {
    this.product = product;
  }

  get getProduct() {
    return this.product;
  }

  set setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  get getQuantity() {
    return this.quantity;
  }

  abstract getPrice(): number;
  abstract compare(product: AbstractSelling): void;
}
