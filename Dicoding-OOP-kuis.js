// 1. Class Animal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// 2. Class Rabbit
class Rabbit extends Animal {
    constructor(name, age) {
        // Properti isMammal di-set menjadi true karena kelinci adalah mamalia
        super(name, age, true);
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

// 3. Class Eagle
class Eagle extends Animal {
    constructor(name, age) {
        // Properti isMammal di-set menjadi false karena elang bukan mamalia
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// 4. Instance myRabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Instance myEagle
const myEagle = new Eagle("Elo", 4);

// Test
console.log(myRabbit);
console.log(myRabbit.eat());

console.log(myEagle);
console.log(myEagle.fly());
