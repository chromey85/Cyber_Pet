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
    feed (){
        this.hunger -40;
        this.thirst -10;
    }
    drink (){
        this.thirst -40;
        this.hunger -10;
    }
    play (){
        this.energy -20;
        this.hunger -30;
        this.thirst -35;
    }
    rest (){
        this.energy +40;
        this.happiness -10;
        this.hunger +10;
    }

    ignored (){
        this.hunger +25;
        this.thirst +25;
        this.happiness -25;
        this.energy -25;
    }
}

const Animal = new Pet("Simba")

console.log(Animal);


setInterval(() => {ignored;}, 30000);

const buttons = document.querySelector("button");

function buttonClick() {
    console.log(buttons)
}

function clickHandler(event) {
    const buttons = event.target.closest("div");
    console.log(buttons.dataset)
  changeAudioTrack(buttons.dataset)
}

function bindHandlerTo(elements, handler) { 
  elements.forEach(el => {
    el.addEventListener("click", handler)
  })
}

bindHandlerTo(buttons,clickHandler);