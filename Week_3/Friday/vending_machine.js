let inputMoney = 0
let inputDrink = "fanta" 
let drinks=[["fanta",5,1.50],["coke",3,1.20],["Dr_pepper",0,3.00]]
const findDrinkDetails =(choosenDrink) =>{
    for(let i=0 ; i < drinks.length ;i++) {switch(true){
case drinks[i][1] == choosenDrink:
    return i ;
    break;
default:
    }}}

const checkstock =(q) =>{
if (drinks[i][1]=0){
return true;
}else{
    return false;}
    }

    const comparePrice=(q,m) =>{
        if (drinks[i][2] > m){
        true;
        }else{
            false;}
            }



const checkDrinkDetails =(requiredDrink,money) =>{
let i = findDrinkDetails(requiredDrink)
if (checkstock(i)){
                console.log("sorry non in stock")
} else if(comparePrice(i,money)){
    console.log("please insert more coins")

} else{ console.log("enjoy your drink")}}








