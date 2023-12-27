
// -------- Question 01 --------
document.write("<h3> Question 01 </h3>");

function currDate() {
  var now = new Date();
  document.write("Current date and time is: " + now);
}

currDate();

document.write("<br>");


// -------- Question 02 --------
document.write("<h3> Question 02 </h3>");

function greet() {
  var firstName = prompt("Question 02: Please Enter First Name");
  var lastName = prompt("Question 02: Please Enter Last Name");
  var fullName = firstName + " " + lastName;

  document.write("Hello Mr. " + fullName);
}

greet();

document.write("<br>");


// -------- Question 03 --------
document.write("<h3> Question 03 </h3>");

function sum() {
  var firstNumber = +prompt("Question 03: Please Enter First Number");
  var lastNumber = +prompt("Question 03: Please Enter Last Number");
  var total = firstNumber + lastNumber;

  document.write("You have entered " + firstNumber + " and " + lastNumber + ". So, the Sum of two numbers is: " + total);
}

sum();

document.write("<br>");


// -------- Question 04 --------
document.write("<h3> Question 04 </h3>");

function calc() {
  var firstNumber = +prompt("Question 04: Please Enter First Number");
  var operator = prompt("Question 04: Please Enter Operator");
  var secondNumber = +prompt("Question 04: Please Enter Second Number");
  var total;

  if (operator == "+") {
    total = firstNumber + secondNumber;
    document.write("Sum of your given numbers is: " + total);
  } else if (operator == "-") {
    total = firstNumber - secondNumber;
    document.write("Subtraction of second number from first number of your input is: " + total);
  } else if (operator == "*") {
    total = firstNumber * secondNumber;
    document.write("Multiplication of your given numbers is: " + total);
  } else if (operator == "/") {
    total = firstNumber / secondNumber;
    document.write("Division of your given numbers is: " + total);
  } else if (operator == "%") {
    total = firstNumber % secondNumber;
    document.write("Remainder from your given two numbers is: " + total);
  } else {
    document.write(
      "You have entered " +
        operator +
        " which is wrong arithematic operator! please enter correct arithematic operator"
    );
  }
}

calc();

document.write("<br>");


// -------- Question 05 --------
document.write("<h3> Question 05 </h3>");

function sqaure(num) {
  var sq = num * num;
  document.write("You have input " + num + "So, square of your input number is: " + sq);
}

sqaure(+prompt("Question 05: Please Enter a Number to get its square"));

document.write("<br>");


// -------- Question 06 --------
document.write("<h3> Question 06 </h3>");

function calculateFactorial() {
  let userInput = prompt("Question 06: Please enter a number to calculate factorial");
  let factNumber = parseInt(userInput);

  if (!isNaN(factNumber)) {
    let factorial = 1;

    for (let i = 1; i <= factNumber; i++) {
      factorial *= i;
    }
    document.write("Factorial of your input " + userInput + " is: " + factorial);
  } else {
    document.write("Invalid Input! please enter a valid number");
  }
}

calculateFactorial();

document.write("<br>");


// -------- Question 07 --------
document.write("<h3> Question 07 </h3>");

function counting() {
  var startNum = +prompt(
    "Question 07: Please enter a number from where you want to start counting"
  );
  var endNum = +prompt(
    "Question 07: Please enter a number at which you want to end counting"
  );

  document.write(
    "Start number was " +
      startNum +
      " and End Number was " +
      endNum +
      " so the counting between starting and ending number is: "
  );
  for (let j = startNum; j <= endNum; j++) {
    document.write(j + ", ");
  }
}
counting();

document.write("<br>");


// -------- Question 08 --------
document.write("<h3> Question 08 </h3>");


function hypotenuse(base, height) {
  
  function square(number) {
    let squared = number * number;
    return squared;
  }
  
  let baseSquared = square(base);
  let heightSquared = square(height);
  let sumOfSquares = baseSquared + heightSquared;
  let hypotenuse = Math.sqrt(sumOfSquares);
  return hypotenuse;
}

let base = prompt("Question 08: Enter base of triangle");
base = Number(base);
		
let height = prompt("Question 08: Enter height of triangle");
		
height = Number(height);
		
let result = hypotenuse(base, height);
document.write("The hypotenuse of the triangle calculated from your given height <b> " + height + " </b> and base <b> " + base+ "</b> is: <b> " + result + "</b>");


document.write("<br>");


// -------- Question 09 --------
document.write("<h3> Question 09 </h3>");


function calculateAreaWithValue(width, height) {
  return width * height;
}

function calculateAreaWithVariables() {
  var width = arguments[0];
  var height = arguments[1];
  return width * height;
}

var areaWithValue = calculateAreaWithValue(5, 8);
var areaWithVariables = calculateAreaWithVariables(6, 10);

document.write("Area with Value is: " + areaWithValue + "<br>");
document.write("Aera with Variables is: " + areaWithVariables);

document.write("<br>");



// -------- Question 10 --------
document.write("<h3> Question 10 </h3>");

function checkPalindrome(){
    
    var uText = prompt("Question 10: Enter a word to check whether it is palindrome or not");
    var reverseText = '';
    
    for(var i = uText.length - 1; i >= 0; i--){
        reverseText += uText[i];
    }
    
    if(reverseText == uText){
        document.write("Given word <b>" + uText + "</b> is a palindrome");
    }
    else{
        document.write("Given word <b>" + uText + "</b> is not a palindrome");
    }
    
}

checkPalindrome();

document.write("<br>");


// -------- Question 11 --------
document.write("<h3> Question 11 </h3>");

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  document.write("You entered " + str + "<br> and it is changed to Title Case as ")

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  document.write("<b>" + str.join(" ") + "</b>");
}
titleCase(prompt("Question 11: please enter a sentence to change case to Title Case"));

document.write("<br>");



// -------- Question 12 --------
document.write("<h3> Question 12 </h3>");

function findLongest(string){
  let find = "";
  let str = string.split(" ");
  for(var i=0; i<str.length; i++){
    if(str[i].length > find.length){
      find = str[i];
    }
  }
  document.write("Your given sentence is: " + string + " <br> ")
  document.write("and the longest word in your input is <b> " + find + "</b>");

}

findLongest(prompt("Question 12: Please Enter a String to find its longest word"));

document.write("<br>");



// -------- Question 13 --------
document.write("<h3> Question 13 </h3>");

function searchCharacter(){

    let uInput = prompt("Question 13: Enter a sentence");
    let searchChar = prompt("Question 13: Enter a character to search in the given sentence");
    
    let find = uInput.matchAll(searchChar);
    let countArr = Array.from(find).length;

    document.write("You have entered <b>" + uInput + "</b> and searched the character <b>" + searchChar + "</b> which is available in the given sentence <b> " + countArr + "</b> times.")
}

searchCharacter();


document.write("<br>");


// -------- Question 14 --------
document.write("<h3> Question 14 </h3>");


function outerFunc(){

    var pi = 3.14159265;
    var inputRadius = +prompt(" Question 14: Please enter radius of circle");
    function calcCircumference(){
        var calulateCircum = 2 * pi * inputRadius;
        document.write("Calculated Cimference is: " + calulateCircum + "<br>");
        
    }
    calcCircumference();
    
    function calcArea(){
        var calulateArea = pi * (inputRadius * inputRadius);
        document.write("Calculated Area is:" + calulateArea);
        
    }
    calcArea();
    
}

outerFunc();

document.write("<br>");
