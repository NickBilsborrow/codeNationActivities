
let day = 1000*60*60*24;  //day in milli scodns
let year = day * 365;    //year in milli seconds
let i =1;// variable to decide which end statement
let newAge = 0;// declaring variable for if loops
let nextBirthday = new Date() ;// declaring variable for if loops
let birthDate = [1998,6,3];     //input date of birth
let currentDate = new Date();   //get the current date
let mCurrentDate = currentDate.getTime();      //current date in milliseconds
let currentYear = Math.round(mCurrentDate/year) + 1970;    // the current year
let mCurrentTime = (mCurrentDate % day) ;     // the current time in milliseocnds
let currentYearBirthday = new Date(currentYear, birthDate[1] - 1,birthDate[2]);    // the date of the birthday of this year, it might have already passed
let mCurrentYearBirthday = currentYearBirthday.getTime();     // the birhtday of this year in milliseconds
if(mCurrentYearBirthday > (mCurrentDate - mCurrentTime-1000*60*60)){   //has the birthday already happened if= no else if = yes else if(2) = its today
    nextBirthday = currentYearBirthday;               //^^^^^ is a mintue off not sure why this compensates
    newAge = currentYear - birthDate[0];
    i=1;}
else if(mCurrentYearBirthday < (mCurrentDate - mCurrentTime-1000*60*60)){ 
    nextBirthday = new Date((currentYear + 1), (birthDate[1] - 1),birthDate[2]);
    newAge = currentYear - birthDate[0]+1;
    i=1;}//  decide if its this year or next year for next birthday
else{ nextBirthday = currentDate,
    newAge = currentYear - birthDate[0];
       i=2;} // different end statment if today is the birhtday i decides which
if(i==1){let mNextBirthday = nextBirthday.getTime(); // next birthday in milliseconds only needed if today isnt birthday
    let daysTillBirthday = Math.ceil((mNextBirthday - mCurrentDate)/day); // calculates the next birthday in milliseconds and the divides by the milliseconds in days the ceilling to round up
    console.log(`There are ${daysTillBirthday} days until it is your birthday. You will be ${newAge} years old.`);}  // days till next birthday
else{console.log(`Today is your birthday, your are ${newAge} years old. Happy Birthday`)};
