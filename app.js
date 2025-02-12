/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(10, 1));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
  if (typeof age !== "number") {
    return "Age must be a number, please try again";
  }
  return age >= 18 ? "Adult" : "Minor";
}

console.log("Exercise 2 Result:", isAdult(32));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(character) {
  character = character.toLowerCase();
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    return true;
  }
  return false;
}

console.log("Exercise 3 Result:", isCharAVowel("E"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, time) {
  time = time.toLowerCase();
  if (time !== "morning" && time !== "afternoon" && time !== "evening") {
    return "Invalid time provided: please enter morning, afternoon, or evening";
  }
  return `Good ${time}, ${name}!`;
}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "All inputs must be numbers";
  }
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
//alternative answer
// return Math.max(num1,num2,num3)

console.log("Exercise 6 Result:", maxOfThree(101, 100, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, tipPercentage) {
  if (typeof bill !== "number" || bill < 0) {
    return "Please enter a valid bill amount(>0)";
  }
  if (typeof tipPercentage !== "number" || tipPercentage < 0) {
    return "Please give a valid tip percentage(>0)";
  }
  return (tipPercentage / 100) * bill;
}

console.log("Exercise 7 Result:", calculateTip(100, 150));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp, scale) {
  if (typeof temp !== "number") {
    return "Please enter a valid temperature number";
  }
  if (typeof scale !== "string") {
    return "Please enter 'C' or 'F' for temperature scale";
  }
  scale = scale.toLowerCase();
  if (scale !== "c" && scale !== "f") {
    return "Please enter 'C' or 'F' for temperature scale";
  }

  if (scale === "c") {
    return `${(temp * (9 / 5) + 32).toFixed(2)} (Fahrenheit)`;
    //add toFixed() to keep consistent typing and round to 2 places
  }
  return `${(((temp - 32) * 5) / 9).toFixed(2)} (Celsius)`;
}

console.log("Exercise 8 Result:", convertTemperature(28, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter numbers in the calculator";
  }
  if (typeof operation !== "string") {
    return "Please enter a valid (string) operation";
  }
  operation = operation.toLowerCase();
  switch (
    operation //using switch case control flow
  ) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) return "Cannot divide by zero.";
      return num1 / num2;
    default:
      return "Please enter a valid operation: 'add', 'subtract', 'multiply', 'divide'.";
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 0, "divide"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(score) {
  if (typeof score !== "number" || score < 0) {
    return "please enter a valid numerical score(0 or higher)"; //we assume valid scores can be >100
  }
  if (score >= 90) return "A";

  if (80 <= score && score < 90) return "B";

  if (70 <= score && score < 80) return "C";
  if (60 <= score && score < 70) return "D";
  return "F";
}

console.log("Exercise 10 Result:", calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

function createUsername(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Please enter a first name and last name as strings";
  }
  if (firstName.length < 3 || lastName.length < 3) {
    return "Please enter names that are 3 or more characters long";
  }
  firstName = firstName.trim(); //trims whitespaces
  lastName = lastName.trim();
  const result =
    firstName.slice(0, 3) +
    lastName.slice(0, 3) +
    (firstName.length + lastName.length);
  return result;
}
console.log("Exercise 11 Result:", createUsername(" Dan ", "Brown"));
