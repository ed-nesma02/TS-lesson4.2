export class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set price(price: number) {
    this._price = price;
  }

  get price() {
    return this._price;
  }
}
