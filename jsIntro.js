// Variables
const discYear = 2021;
let studioWeek = 4;
let name = "Chris";

// Conditions
let year = 2021;

if (year > 2021) {
    console.log("Year is greater than 2021");
} else if (year == 2021) {
    console.log("Year is 2021!");
} else {
    console.log("Year is less than 2021");
}

// Switch Statement
let id = 123456;

// This will print "Hello world 4"
switch(id) {
    case 123:
      console.log("Hello world 1");
      break;
    case 1234:
      console.log("Hello world 2");
      break;
    case 12345:
      console.log("Hello world 3");
      break;
    case 123456:
      console.log("Hello world 4");
      break;
    default:
      console.log("No match");
  }
  
// Arrays
const csClasses = [111, 150, 211, 212]

csClasses.length // Number of array elements (currently 4)

csClasses.push(213) // Adds '213' to the end of the the array

csClasses[2] // Array indexing --> returns 211

csClasses.pop() // Removes last array element (213)

// Dictionaries

// Empty dictionary
let classDifficulties = new Object();
let classDifficulties = {}

// Add key-values pairs
classDifficulties[111] = 3;
classDifficulties[214] = 5;
classDifficulties[211] = 8;
classDifficulties[213] = 8;


// For Loops
const nums = [1, 2, 3, 4, 5]
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum); // This will print 15 (1 + 2 + ... + 5)

// While Loops
const nums = [1, 2, 3, 4, 5]
let sum = 0;
let index = 0

while (index < nums.length) {
    sum += nums[index];
}

console.log(sum); // This will again print 15


// Map function
const nums = [50, 100, 150, 200, 250];

const numsModified = nums.map(num => num / 50);
console.log(numsModified);