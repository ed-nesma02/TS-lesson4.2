export class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  get infoPrice() {
    return this.price;
  }
}
