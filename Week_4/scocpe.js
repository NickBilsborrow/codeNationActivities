//global scope defined everywhere
let a = 1
const b = 2

// function scope defined only inside a function

// const func = ()=>{
//   let c=4
// // here
// }
// // but not here



// block scope
// if(let i )


// const func = ()=>{
//     let c=4
//     return c
//   // here
//   }
// console.log(func);

// const Day = {
//     morning: "Morning",
//     afternoon: "Afternoon",
//     evening: "Evening",
// }


let whichGreeting = (timeOfDay) => {
    console.log(`Good ${ Day[timeOfDay]}`)
}

let greet = (time , fn) => {
    if (time < 12) {
        fn("morning")
    } else if (time >12 && time < 18){
        fn("afternoon")
    } else {
        fn("evening")
    }
}
greet(14,whichGreeting)


let myFunction = () => {
    return () =>{
        console.log("hello");
    }
}

myFunction()()


let multiply = (num1) => {
return (num2) => {
    return num1 * num2
    }
}
let myReturnedFunction = multiply(45)
console.log(myReturnedFunction(4))





