const getNumbers = function* (numbers) {
    for (let index = 0; index < numbers.length; index++) {
        yield numbers[index];
    }
}
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const getNumbersGen = getNumbers(myNumbers);
const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if (next.done) {
        log('Generator Is Done');
        clearInterval(interval);
    } else {
        const number = next.value;
        log(number);
    }
}, 1000);