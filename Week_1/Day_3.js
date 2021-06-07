if(1!=="1"){console.log("True")}
else{console.log("False")}

let place = "Manc";
let weather = "Cloudy";
if (place == "Manc" && weather == "Sunny") {
console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
console.log("Obvs");
}
else {
console.log("What it isn't raining?");
}


let car = "Peugeot";
if(car == "Ford" || car == "GM"){
console.log("You've got an American car!");
}
else if(car == "Peugeot" || car == "Citroen"){
console.log("You've got a French boy!");
}
else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
console.log("Japanese cars are dead quiet!");
}
else if(car == "Mercedes"){
console.log("You are proper posh German!");
}
else if(car == "Volkswagen"){
console.log("German aren't that bad at all!");
}
else if(car == "Hyundai" || car == "Kia"){
console.log("South Korean cars are getting popular!");
}
else{
console.log("Your car is not in the top ten companies in the world!");} 
const grade = 87
switch (true){ 
    case grade >= 70 :
         console.log("distinction");
         break;
    case grade >= 60:
         console.log("Merit");
         break;
    case grade >= 50:
         console.log("Pass");
         break;
    default:
         console.log("failed");
}
