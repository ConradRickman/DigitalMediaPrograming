//Prompt
var name = prompt("Please enter your name");
     if (name != null) {
            document.getElementById("title").innerHTML =
            "Hello " + name + "! How are you today?";} 

//Numeric Variable and Assignment Operator
var a = 5;
var b = 4;

//Arithmetic Operators
var sum = a + b;
var diff = a - b;

//String Variable
var string = "This is a sentence.";


//If statment and Equality
var equalNumbers;

if (a==b) {
    equalNumbers = true;
} else {
    equalNumbers = false;
}


//console.log
console.log("What is five plus four? " + sum);
console.log("What is five minus four? " + diff);

console.log(string);

console.log("Five and four are equal? " + equalNumbers)
