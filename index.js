alert("js from");
console.log("This is javascript");


//variables(declare nd assign)

var x = 5;
console.log("x=", x);

var name = "Arun";
console.log("my name is", name);

var fName = "Ram";
var lName = "Kumar";
var age = 22;
var designation = "Software Devloper";

//concadination

console.log("My first Name", fName, "My last Name", lName, "I'm", age, "Years old My Designation is", designation);


//operators(4 types)

//1.Arithmetic operator

var sum = 5 + 2;
console.log("sum=", sum);

var minus = 7 - 2;
console.log("minus=", minus);

var mul = 5 * 2;
console.log("mul=", mul);

var div = 5 / 2;
console.log("div=", div);

var power = 5 ** 2;  // power
console.log("5 power is", power);

var reminder = 5 % 2;    // modular division
console.log("reminder=", reminder);

var x = 2;
x++;  // incriment
x++;
x++;
x--;  // decrement
console.log("x", x);

//2.Assignment Operator

var y = 5;
y = y + 2;

//or

y += 2;
y += 2;

//or

y = y - 2;

//3.Comparison  Operator

var a = 5;
var b = 7;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


//4.Logical Operators

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)

console.log(!(false || !true) && (true && !false))

console.log(2 + 20 / 5)

// Datatypes(6types)

var i = 2; // datatype is number
var name = "Arun" // datatype is string

var stdObject = {
    name: "Arun",
    age: 22,
    dept: "CSE"    // object datatype
}
console.log(stdObject)

var numArr = [5, 2, 4]; // number array
var nameArr = ["Arun", "Ram", "Kumar"]; // string array
var mixedArr = ["Arun", 22, "CSE"] // mixed array

var stdArr = [
    {
        name: "Arun",
        age: 22,
        dept: "CSE"        // array datatype
    },
    {
        name: "Kumat",
        age: 24,
        dept: "CSE"

    }

]
console.log(stdArr)

var test = true; // boolean  datatype, value is truw
var sample = false; // boolean datatype, value is false
var x; // undefines datatype (value also bcms undefined )


//Conditional statements

//1.if

var j = 5;
if (j < 10) {
    console.log("j is less than 10")
}

//2.if-else

var k = 20;
if (k < 10) {
    console.log("k is less than 10");
} else {
    console.log("k is greater than 10")
}

var age = 17
if (age > 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote")
}

//4.Switch

var fruit = "Orange"
switch (fruit) {
    case "Apple": console.log("The fruit is Apple");
        break
    case "Banana": console.log("The fruit is Banana");
        break
    case "Mango": console.log("This fruit is Mango");
        break
    default: console.log("There is no fruit");
}

//3.if-else if-else

var lang = "French"
if (lang == "English") {
    console.log("The language is English");
} else if (lang == "Hindi") {
    console.log("The language is Hindi");
} else if (lang == "Tamil") {
    console.log("The language is Tamil");
} else {
    console.log("Unknown language")
};


var age2 = 21
if (age2 < 14) {
    console.log("Child");
} else if (age2 < 20) {
    console.log("Teen");
} else if (age2 < 30) {
    console.log("Young");
} else if (age2 < 40) {
    console.log("Middle age");
} else {
    console.log("Adult");
}