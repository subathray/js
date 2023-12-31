var fruitArr = ["Apple", "Banana", "Mango", "Grapes"];

//length
var arrLength = fruitArr.length;
console.log("Length of this array:", arrLength);
//or
console.log("Length of this array:", fruitArr.length);

//index
console.log(fruitArr);

//Printing particular element in array
console.log(fruitArr[2]);
console.log(fruitArr[3]);

//replacing an element in an array
fruitArr[3] = "Pineapple";
console.log("After replacing:", fruitArr);

//adding new element into an array
fruitArr[4] = "Orange";
console.log("After adding:", fruitArr);

//deleting an element from an array - empty space is issued
delete fruitArr[1];
console.log("After deleting:", fruitArr);

//array iteration(using loop);
for (var i = 0; i < fruitArr.length; i++) {
    console.log(fruitArr[i]);
}