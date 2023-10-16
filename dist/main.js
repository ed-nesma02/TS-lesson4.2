"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstSelling_1 = require("./Classes/FirstSelling");
const Product_1 = require("./Classes/Product");
const SecondSelling_1 = require("./Classes/SecondSelling");
const ProductPurchase = (product1, product2) => {
    return product1.compare(product2);
};
const product1 = new Product_1.Product('Микроволновая печь', 6490);
const product2 = new Product_1.Product('Умная колонка', 14990);
const product3 = new Product_1.Product('Сковорода', 1199);
const product4 = new Product_1.Product('Аккумуляторная дрель', 1699);
const product5 = new Product_1.Product('Оперативная память', 6937);
const product6 = new Product_1.Product('Наушники', 1791);
const product7 = new Product_1.Product('USB Flash накопитель', 928);
const product8 = new Product_1.Product('Игровая клавиатура', 499);
const firstProduct1 = new FirstSelling_1.FirstSelling(product1, 2);
const firstProduct2 = new FirstSelling_1.FirstSelling(product2, 5);
const firstProduct3 = new FirstSelling_1.FirstSelling(product3, 1);
const firstProduct4 = new FirstSelling_1.FirstSelling(product4, 8);
const secondProduct1 = new SecondSelling_1.SecondSelling(product5, 3, 5);
const secondProduct2 = new SecondSelling_1.SecondSelling(product6, 5, 2);
const secondProduct3 = new SecondSelling_1.SecondSelling(product7, 6, 3);
const secondProduct4 = new SecondSelling_1.SecondSelling(product8, 4, 4);
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
});
