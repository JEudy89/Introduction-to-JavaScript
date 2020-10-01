/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
// const votingAge = 18
// if (votingAge >= 18){
//     console.log(true);
// } else {
//     console.log(false);
// } 



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let store = "Wally"
let price = 10

if (store != "Belks") {
    price = 15;
} else if (store = "Belks") {
    store = "Walmart";
} else {
    console.log("Does not compute");
}

console.log(store);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
// let num = "1999"
// console.log(num);
// Number(num);
// console.log(num);




//Task d: Write a function to multiply a*b 
// function multiply (a, b) {
//     return a * b
// }
// console.log(multiply(2, 4));

// const multiply = (a, b) => {
//     return a * b;
// }
// console.log(multiply(5, 5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

// function dogAge (age) {
//     return age * 7;
// }
// const dogAge = (age) => {
//     return age * 7;
// }
//  let dogAge1 = (age) => {
//      return age * 7
//  }
// console.log(dogAge(5))
// console.log(dogAge1(6))
// dogAge1 = 10;
// console.log(dogAge1)
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function food(age, weight) {
if (age >= 1) {
    if (weight <= 15 && weight >= 11) {
    console.log(weight * .03);
    } else if (weight > 15){
        console.log(weight * .02);
    } else if (weight >= 6 && weight <=10) {
        console.log(weight * .04);
    } else if (weight < 5) {
        console.log(weight * .05);
    }
} else if (age < 1) {
    if (age > 2/12 && age < 4/12) {
        console.log(weight * .10)
    } else if (age > 4/12 && age < 7/12) {
        console.log(weight * .05);
    } else {
        console.log(weight * .04)
    }
}
}
console.log(food(1,15))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// Note: I am giving "Paper" 0-0.32, "Scissors" 0.33-0.65, and "Rock" 0.66-0.99
  let myHand = "Rock"
  let opponentHand = Math.random()

  if (myHand = "Scissors") {
      if (opponentHand >= 0 && opponentHand <= 0.32) {
          console.log("You Win!");
      } else if (opponentHand >= 0.33 && opponentHand <= 0.65) {
          console.log("Draw!");
      } else {
          console.log("You Lose!");
      }
  }  else if (myHand = "Paper") {
    if (opponentHand >= 0 && opponentHand <= 0.32) {
        console.log("Draw!");
    } else if (opponentHand >= 0.33 && opponentHand <= 0.65) {
        console.log("You Lose!");
    } else {
        console.log("You Win!");
    }
} else if (myHand = "Rock") {
    if (opponentHand >= 0 && opponentHand <= 0.32) {
        console.log("You Lose!");
    } else if (opponentHand >= 0.33 && opponentHand <= 0.65) {
        console.log("You Win!");
    } else {
        console.log("Draw!");
    }
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kMToMiles(KM){
    return (KM * 0.62137);
}

console.log(kMToMiles(5));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCM(feet){
    return (feet * 30.48);
}

console.log(feetToCM(10));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingSong(number) {
for (number; number > 0; number--){
    if (number > 1){
    console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number -1} bottles of soda on the wall`)
} else if (number = 1){
    console.log(`${number} bottle of soda on the wall, ${number} bottle of soda, take one down pass it around ${number -1} bottles of soda on the wall`)
}
}
}
console.log(annoyingSong(99));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





