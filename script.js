class Pet {
    constructor(name, hunger, thirst, happiness){
        this._name = name;
        this._hunger = 0;
        this._thirst = 0;
        this._happiness = 100;
        this._energy = 100;
    }

    get name() {
        return this._name;
    }
    feed() {
        return this._hunger -= 20;
    }
    feed() {
        return this._thirst -= 20;
    }
    feed() {
        return this._happiness -= 20;
    }
    feed() {
        return this._energy -= 20;
    }
}

const Animal = new Pet("Simba")

console.log(Animal);