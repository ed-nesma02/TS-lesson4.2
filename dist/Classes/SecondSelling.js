"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SecondSelling extends AbstractSelling_1.AbstractSelling {
    quantityForDiscount;
    constructor(product, quantity, quantityForDiscount) {
        super(product, quantity);
        this.quantityForDiscount = quantityForDiscount;
    }
    set setQuantityForDiscount(quantityForDiscount) {
        this.quantityForDiscount = quantityForDiscount;
    }
    get getQuantityForDiscount() {
        return this.quantityForDiscount;
    }
    getPrice() {
        if (this.quantityForDiscount <= this.quantity) {
            return +(this.product.infoPrice * this.quantity * 0.9).toFixed(2);
        }
        return this.product.infoPrice * this.quantity;
    }
    compare(product) {
        if (product.getPrice() > this.getPrice())
            return 1;
        if (product.getPrice() === this.getPrice())
            return 0;
        return -1;
    }
}
exports.SecondSelling = SecondSelling;
