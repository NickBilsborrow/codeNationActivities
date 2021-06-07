//warmup challange

let age =60
switch(true){
case age > 59:
    console.log("senior £7.50 please.")
    break;
case age >17:
    console.log("adult £10.95 please.")
    break;
default:
    console.log("child £8 please.")
}


let coffeeIsGrinding = false;

const pressGrindBeans= () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grinding");
        coffeeIsGrinding = false;
    }
        else{
            console.log("Commence the grinding.");
            coffeeIsGrinding = true;
        }
};
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();

let accnumber = 50449921;
let withDrawAmount = 10;
let accAmount = 4000000000;
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
    }


    cashWithdrawal(withDrawAmount, accnumber);
    accnumber = 50449984;
    withDrawAmount = 130;
    cashWithdrawal(withDrawAmount, accnumber);


    const addUp =(num1 , num2) => {
        return num1 + num2;
    }
console.log(addUp(124342134,475734213))

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
    return (n * factorial(n-1));
    }
    }
    console.log(factorial(4));

    let orderCount = 0;
const takeOrder = (topping1,topping2) => {
console.log(`Pizza with ${topping1} and ${topping2} `);
orderCount++;
}
takeOrder("pineapple","Ham");


//Activity2
let peoples = [[1234, 12345678,100000000],//pin account number code
                [4356, 12345679,6],
               [1234, 12345689,150]];

const findAccount =(accountNumber) =>{
    for(let i=0 ; i < peoples.length ;i++) {switch(true){
case peoples[i][1] == accountNumber:
    return i ;
    break;
default:
    }}};//finds the row the account matchs to
  
const pinCheck=(pin , accountNumberD ) =>{
    if(peoples[accountNumberD][0] == pin ){return true}
    else{return false}
}// checks the pin matches the account number

const fundCheck =( accountNumberD , withDrawlAmount) =>{

if( peoples[accountNumberD][2] - withDrawlAmount > 0){return true}
else{return false}
}//checks there is enough money in given account
    

const withDrawl= ( pin , accountNumber , withDrawlAmount ) => {
    let accountNumberD 
    let fish = findAccount(accountNumber)
 if ( Number.isInteger(fish)){accountNumberD   = fish ;//fish is just a place holer so i don't run findAccount twice
   if (pinCheck( pin , accountNumberD ) == false){console.log("Your pin is not correct")}
   else if (fundCheck( accountNumberD , withDrawlAmount ) ){
    peoples[accountNumberD][2] = peoples[accountNumberD][2] - withDrawlAmount;
    console.log(`Your account ${accountNumber} has been charged ${withDrawlAmount} yuor new account balance is ${peoples[accountNumberD][2]} Dont foget to tack your card.`)}
       
    
   else (console.log("Your account does Not have enough funds"))
   }
else{console.log("your account number doesnt match our records")}}

withDrawl(1234,12345678,500);
withDrawl(1234,12345678,500);
withDrawl(1234,12345678,500);




