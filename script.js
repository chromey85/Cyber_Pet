class Pet {
    constructor(name, hunger, thirst, happiness){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._happiness = 100;
        this._energy = 100;
        this.feed = this.feed.bind(this);
        this.drink = this.drink.bind(this);
        this.play = this.play.bind(this);
        this.rest = this.rest.bind(this);
        this.ignored = this.ignored.bind(this);
     }
//--------getters------------
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happiness() {
        return this._happiness;
    }
    get energy() {
        return this._energy;
    }
//--------setters------------
    set hunger(val) {
        this._hunger = val;
        if (this._hunger < 0) this._hunger = 0;
        if (this._hunger > 100) this._hunger = 100;
      }
    set thirst(val) {
        this._thirst = val;
        if (this._thirst < 0) this._thirst = 0;
        if (this._thirst > 100) this._thirst = 100;
    }
    set happiness(val) {
        this._happiness = val;
        if (this._happiness < 0) this._happiness = 0;
        if (this._happiness > 100) this._happiness = 100;
    }
    set energy(val) {
        this._energy = val;
        if (this._energy < 0) this._energy = 0;
        if (this._energy > 100) this._energy = 100;
    }

    feed(){
        this._hunger +=20
        this._thirst +=10
        this._energy +=10
    }
    drink(){
        this._thirst +=20
        this._hunger +=10
        this._happiness +=10
    }
    play(){
        this._energy -=20
        this._hunger -=40
        this._thirst -=30
        this._happiness +=40
    }
    rest(){
        this.energy +=10
        this.happiness -=10
        this.hunger -=10
        this._thirst -=10
    }
    ignored(){
        this._hunger -=20
        this._thirst -=20
        this._happiness -=20
        this._energy -=20
    }
}

const input = document.getElementById('input')
const hunger_bar = document.getElementById('hunger_bar')
const thirst_bar = document.getElementById('thirst_bar')
const hap_bar = document.getElementById('hap_bar')
const energy_bar = document.getElementById('energy_bar')

let animalName
let animal

function updateStats() {
    const hunAmount = Math.ceil(animal.hunger / 10)
    hunger_bar.textContent = '☐'.repeat(hunAmount)
    const thirAmount = Math.ceil(animal.thirst / 10)
    thirst_bar.textContent = '☐'.repeat(thirAmount)
    const hapAmount = Math.ceil(animal.happiness / 10)
    hap_bar.textContent = '☐'.repeat(hapAmount)
    const enAmount = Math.ceil(animal.energy / 10)
    energy_bar.textContent = '☐'.repeat(enAmount)
}

function start(){
    if (!input.value) {
        alert('enter animal name')
        return
      }
      animalName = input.value
      console.log('animalName = ', animalName)
      animal = new Pet(animalName)
      
}

function methodWrapper(func) {
    func();
    updateStats();
  }

// function feedAnimal() {
//     // Call the 'feed()' method of the animal instance
//     animal.feed()
//     // update the UI
//     updateStats()
// }
// function drinkAnimal() {
//     animal.drink()
//     updateStats()
// }
// function playAnimal() {
//     animal.play()
//     updateStats()
// }
// function restAnimal() {
//     animal.rest()
//     updateStats()
// }

setInterval(() => {
    if (animal) {
      // Call 'ignore' method
      animal.ignored()
      // update the UI
      updateStats()
    }
  }, 30000)

function reset(){
    document.location.reload(true)
}









    // let animalName = document.getElementById("input").value;
    // let classHide = document.querySelectorAll(['.pet_img', '.pet_container', '.stats_container', `.button_container`]);
    // document.addEventListener("click", (i) =>{
    //     console.log(i);
    //     classHide.style.display = "";
//     let Animal = new Pet(animalName)
// console.log(Animal);
// }

// const Animal = new Pet("TEST")

// console.log(Animal);



//setInterval(() => {this.ignored()}, 30000);
