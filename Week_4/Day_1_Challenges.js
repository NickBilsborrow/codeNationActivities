// const hello = () =>{
//     console.log("Hello Code Nation")
// }
// // hello()

// const theRepeater = (fn) =>{
//     for(let i = 0 ; i < 5; i++){
//         fn()
//     }
// }

// theRepeater(hello);

//challenge 2

// const add = (num1,num2) =>{
//     return num1 + num2
// }

// const theRepeaterAddTime = (num1,num2,fn) =>{
//     let total=0
//     for(let i = 0 ; i < 5; i++){
//      total= total +  fn(num1,num2)
//     }
//     return total
// }
// console.log(theRepeaterAddTime(4,5,add))


// CHALLENGE 3


// const array = [6,3,7,8,5]
// const x3 = (x) =>{
//     return x * 3
// }
// console.log(array.map(x3))


//challenge 4

const multiply = (a,b) => {
    return a * b
}

const add = (a,b) => {
    return a + b
}

const divide = (a,b) => {
    return a / b
}

const subtract = (a,b) => {
    return a - b
}

const doMath =(num1)=> {
    return (num2,fn) => {
        
        return fn(num1,num2);     
    }

}
console.log(doMath(6)(3,subtract))
