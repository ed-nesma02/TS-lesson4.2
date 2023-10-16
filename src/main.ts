import {AbstractSelling} from './Classes/AbstractSelling';
import {FirstSelling} from './Classes/FirstSelling';
import {Product} from './Classes/Product';
import {SecondSelling} from './Classes/SecondSelling';

const ProductPurchase = (
  product1: FirstSelling | SecondSelling,
  product2: FirstSelling | SecondSelling
) => {
  return product1.compare(product2);
};

const product1: Product = new Product('Микроволновая печь', 6490);
const product2: Product = new Product('Умная колонка', 14990);
const product3: Product = new Product('Сковорода', 1199);
const product4: Product = new Product('Аккумуляторная дрель', 1699);
const product5: Product = new Product('Оперативная память', 6937);
const product6: Product = new Product('Наушники', 1791);
const product7: Product = new Product('USB Flash накопитель', 928);
const product8: Product = new Product('Игровая клавиатура', 499);

const firstProduct1: FirstSelling = new FirstSelling(product1, 2);
const firstProduct2: FirstSelling = new FirstSelling(product2, 5);
const firstProduct3: FirstSelling = new FirstSelling(product3, 1);
const firstProduct4: FirstSelling = new FirstSelling(product4, 8);

const secondProduct1: SecondSelling = new SecondSelling(product5, 3, 5);
const secondProduct2: SecondSelling = new SecondSelling(product6, 5, 2);
const secondProduct3: SecondSelling = new SecondSelling(product7, 6, 3);
const secondProduct4: SecondSelling = new SecondSelling(product8, 4, 4);

const listProduct = [
  firstProduct1,
  firstProduct2,
  firstProduct3,
  firstProduct4,
  secondProduct1,
  secondProduct2,
  secondProduct3,
  secondProduct4,
];

listProduct.sort(ProductPurchase);

console.log(listProduct);

console.log('\nПокупки:\n');

listProduct.forEach(item => {
  console.log(`${item.getProduct.getName} всего: ${item.getPrice()}`);
})