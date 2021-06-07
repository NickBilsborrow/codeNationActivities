//challange 1
// const pass = "asd"
// let passNum = pass.length
// switch (true){ 
//     case passNum >16 :
//          console.log("password is too long.");
//          break;
//     case passNum >7:
//         console.log(`Your password is ${pass}.`);
//                  break;
//     default:
//          console.log(`Your password is too short.`);}

//challenge 2
// let num = 15
// if(num % 3 == 0 && num % 5 == 0){ console.log(`${num} is divisable by 3 and 5`);}
// else if(num % 3 == 0){console.log(`${num} is divisible by 3`);}
// else if(num % 5 == 0){console.log(`${num} is divisible by 5`);}
// else{console.log(`${num} is not divisible by 3 or 5`);};

//challenge 3
// let num = 15
// if(num % 3 == 0 && num % 5 == 0){ console.log(`Fiss Buzz`);}
// else if(num % 3 == 0){console.log(`Fiss`);}
// else if(num % 5 == 0){console.log(`Buzz`);}
// else{console.log(`Sad times`);};


//challenge 4
// let num ="2072"
// let numLength = num.length;
// let numA = [];
// let revNumA = [];
// let j=0
// for (let i = 0; i < numLength; i++){ numA[i] = num.charAt(i)}
// for (let i = 0; i < numLength; i++ ){ revNumA[ numLength-1-i] = num.charAt(i)};
// for (let i = 0; i < numLength; i++){
//     if (numA[i] == revNumA[i]){
//         j=j+1}
// else{} }
// if (j === numLength){console.log(`${num} is a palindrome`)}
//  else{console.log(`${num} is a not a palindrome`)}
//  console.log(numA);console.log(revNumA);
// console.log(j)


//challenge 5


//challenge 6
let string = "fjsiosdnewoivbnsihnfidfnauigfndgbfuigfjkdlghdpoiafoidfbdoifduernivklsdjfbeuidfbsdfkdffsidfdsgdgsgodgdsgifdsgfdsfsdf";
let array = string.split("");
let arrayV = ["a","e","i","o","u"]
let stringLength = string.length
let j=0
let finalVowel = ""
// for (let i=0; i < stringLength; i++){if(array[i]=="a"||array[i]=="e"||array[i]=="i"||array[i]=="o"||array[i]=="u"){j=i};}

console.log(stringLength)

// for (
//     let i=0; i < stringLength; i++){ 
//     for (
//         let k=0; k < 5; k++){ 
//     switch (true){ 
//     case array[i] == arrayV[k] :         
//            j = i
//            finalVowel=arrayV[k]
//            break;
//     default:         
// }   }   ;}
// console.log(`the final vowel is the has the placement  ${j+1}`)

