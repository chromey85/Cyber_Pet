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
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get energy() {
        return this._energy;
    }

    feed(){
        this.hunger -40;
        this.thirst -10;
    }
    drink(){
        this.thirst -40;
        this.hunger -10;
    }
    play(){
        this.energy -20;
        this.hunger -30;
        this.thirst -40;
    }
    rest(){
        this.energy +40;
        this.happiness -10;
        this.hunger +10;
    }
    ignored(){
        this.hunger +20;
        this.thirst +20;
        this.happiness -20;
        this.energy -20;
    }
}
let start = () => {

}
reset()

const Animal = new Pet("Simba")

console.log(Animal);

setInterval(() => {Pet.apply(ignored())}, 30000);
