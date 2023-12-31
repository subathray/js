var fruitArr = ["Apple", "Orange", "Banana", "Grapes"];

fruitArr.splice(1, 2); //(index,length)
console.log("After splicing:", fruitArr);

fruitArr.push("Mango");
console.log("After adding:", fruitArr);

fruitArr.pop();
console.log("After removing:", fruitArr);

fruitArr.unshift("Mango");
console.log("After adding at the starting:", fruitArr);


fruitArr.shift();
console.log("After removing from the begining", fruitArr);

var boysArr = ["Arun", "Arjun", "Ram", "Kumar"];
var girlsArr = ["Geetha", "Rani"]

var stdArr = boysArr.concat(girlsArr);
console.log("StudentArray:", stdArr);

stdArr.sort();
console.log("After sorting:", stdArr);

stdArr.reverse();
console.log("After reversing:", stdArr);

//sort + reverse = decending order

var stdStr = stdArr.toString();
console.log("After converting to string:", stdStr);