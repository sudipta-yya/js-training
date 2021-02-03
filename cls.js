
class Animal {
    constructor(name, age) {
        log('Name ' + name + ' & Age ' + age);
        this.name = name;
        this.age = age;
    }
    static iAmStaticMethod() {
        log('I am a Static Method inside the Animal Class.');
    }
    play() {
        log(this.name + ' is playing');
    }
    sleep() {
        log(this.name + ' is sleeping');
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        log('Breed : ' + breed);
        this.breed = breed;
    }
    play() {
        super.play();
    }
    sleep() {
        super.sleep();
    }
}
Animal.iAmStaticMethod();
const bullDog = new Dog('Devil', 4, 'Bull Dog');
bullDog.play();
bullDog.sleep();