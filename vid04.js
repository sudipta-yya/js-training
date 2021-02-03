var person = {
    name: "Sudipta",
    age: 99,
    goal: "Nothing",
    address: {
        houseNo: 26,
        roadName: "Thakurpara Road",
        pinCode: 743123
    }
};
log(JSON.stringify(person));
log(person.name);
log(Object.values(person));
log(JSON.stringify(person.address));