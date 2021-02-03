const genNumbers = function* () {
    yield 1;
    yield 'hello';
    yield true;
    yield { name: 'Sudipta' };
    return 'I am done.';
};
const numberGen = genNumbers();
log(numberGen.next().value);
log(numberGen.next().value);
log(numberGen.next().value);
log(JSON.stringify(numberGen.next().value));
log(numberGen.next().value);