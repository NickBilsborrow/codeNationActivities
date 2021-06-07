let age = 19;
let country = "uk"
if (age > 17 && country =="uk" ){
    console.log("yes I can serve you");}
else if (age > 20 && country =="us" ){
    console.log("yes I can serve you");}
else{console.log(`You aren't old enough yet.`) }



let pizzaTopping = "trollies"
switch (pizzaTopping){ 
    case "cheese":
    case "tomato":
         console.log("Not a pizza without this.");
         break;
    case "Bacon":
    case "Chicken":
        console.log("Its good to have a bit of meat");
                 break;
    default:
         console.log(`404 ${pizzaTopping} not found`);}