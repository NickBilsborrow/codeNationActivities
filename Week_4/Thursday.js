let Name = "nick";
let age=23;
let cake= true
let hairColour = "light brown "
let array = [Name,age,cake,hairColour]



let height = 173;
array.push(height);

for(let i=0; i < array.length; i++){
    console.log(array[i]);
};


const dave= 1000000

const func =(withdrawamount,account) =>{
    account= account- withdrawamount;
    console.log(account);
}
func(100,dave);


// let rosie ={
//     name:"rosie",
//     hops: 0,
//     get theName() {
//         return this.name
//     },
//     get theHops() {
//         return this.hops
//     },
//     increaseHops() {
//         this.hops++
//     }
// }
// console.log(rosie.theHops)

console.log(Math.floor((Math.random()) * 6) +1)


class Bunny{
    constructor(name){
        this._name = name;
        this._hops = 0;
    }
    get name(){
        return this._name;
    }
    get hops(){
        return this._hops;
    }
    increaseHops(){
        this._hops++;
    }
}
const rosie = new Bunny("Rosie");
console.log(rosie)





class cars{
    constructor(car,howLong){
        this.reg = car;
        this.stay = howLong;
        
    }
    get chargeCalc(){
        this.charge = this.stay *1.5;
        return this.charge
    }   

}   
const car1 =new cars("fhsb4idfb",3)
console.log(car1.chargeCalc)






class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this._thirst--;
    }
    }
    
    class Bunny extends Animal {
    constructor(name, lovesCarrot){
    super(name);
    this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrots(){
    return this._lovesCarrot;
    }
    }
    
    const rosie = new Bunny("Rosie", true);
    console.log(rosie.name);
    console.log(rosie.thirst);
    console.log(rosie.hunger);
    rosie.eat();
    rosie.drink();
    console.log(rosie.thirst);
    console.log(rosie.hunger);