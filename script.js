let animalName = ""

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
        this.hunger -=40;
        this.thirst -=10;
    }
    drink(){
        this.thirst -=40;
        this.hunger -=10;
    }
    play(){
        this.energy -=20;
        this.hunger -=30;
        this.thirst -=40;
    }
    rest(){
        this.energy +=40;
        this.happiness -=10;
        this.hunger +=10;
    }
    ignored(){
        this.hunger +=20;
        this.thirst +=20;
        this.happiness -=20;
        this.energy -=20;
    }
}

function start(){
    let animalName = document.getElementById("input").value;
    let classHide = document.querySelectorAll(['.pet_img', '.pet_container', '.stats_container', `.button_container`]);
    // document.addEventListener("click", (i) =>{
    //     console.log(i);
    //     classHide.style.display = "";
    
let Animal = new Pet(animalName)
console.log(Animal);
}

function reset(){
    document.location.reload(true)
}

const Animal = new Pet("TEST")

console.log(Animal);

//setInterval(() => {this.ignored()}, 30000);
