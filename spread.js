
const arrayOne = ['Sudipta', 'Misty', 'Sourav'];
const arrayTwo = ['Mousumi', 'Soumak', 'Sangram'];
const arrayConcat = [...arrayOne, ...arrayTwo];
arrayConcat.forEach(name => log(name));

const arrayThree = 'Sudipta';
[...arrayThree].forEach(letters => log(letters));

const info = {
    name: 'Sudipta',
    profession: 'Programmer'
};
const address = {
    house: 26,
    road: 'Thakurpara Road'
};
const person = { ...info, ...address };
log(JSON.stringify(person));