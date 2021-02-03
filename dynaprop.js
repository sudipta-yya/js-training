
const myPriceTag = 'PRICE';
const calculator = (name, price) => {
    return {
        name,
        [myPriceTag.toLowerCase()]: price,
        add(n1, n2) { return n1 + n2; },
        substract(n1, n2) { return n1 - n2; },
        multiply(n1, n2) { return n1 * n2; },
        divide(n1, n2) { return n1 / n2; },
        modulo(n1, n2) { return n1 % n2; }
    };
};

const calc = calculator('casio', 19.99);
log(calc.name);
log(calc[myPriceTag.toLowerCase()]);
log(calc.add(20, 10));
log(calc.substract(20, 10));
log(calc.multiply(20, 10));
log(calc.divide(20, 10));
log(calc.modulo(20, 10));