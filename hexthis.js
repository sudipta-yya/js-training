

const person = {
    name: 'Sudipta',
    cars: ['Ferrari', 'Lambo'],
    toString: function () {
        // log(this.name + ' has ' + this.cars);

        // this.cars.forEach(function (car) {
        //     log(this.name + ' has ' + car);
        // }.bind(this));

        // const that = this;
        // this.cars.forEach(function (car) {
        //     log(that.name + ' has ' + car);
        // });

        this.cars.forEach(car => log(this.name + ' has ' + car));
    }
};
person.toString();