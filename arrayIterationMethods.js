var fruitArr = ["Apple", "Orange", "Grapes", "Banana"];

var mapResult2 = fruitArr.map(function (fruit) {
    return `The fruit is ${fruit}`;
})
console.log("Map Result2:", mapResult2);

for (var i = 0; i < fruitArr.length; i++) {
    console.log("Iteration:",fruitArr[i]);

}

fruitArr.forEach(function (fruit) {
    console.log("For Each:", fruit);
})

var numArr = [1, 2, 3, 4];

var mapResult = numArr.map(function (number) {
    return number + 2;
})
console.log("Map Result:", mapResult);

var numberArr2 = [25, 36, 45, 50];
var findResult = numberArr2.find(function (number) {
    return number < 40;
})
console.log("Find Result:", findResult);

var someResult = numberArr2.some(function (number) {
    return number < 30;
})
console.log("Some result:", someResult);

var everyResult = numberArr2.every(function (number) {
    return number < 51;

})
console.log("Every result:", everyResult);

var filterResult = numberArr2.filter(function (number) {
    return number < 40;
})
console.log("Filetered result:", filterResult)

var nameArr = ["Arun", "Kumar", "Suresh", "Shankar", "Shangavi", "Arun"];

var indexResult = nameArr.indexOf("Arun");
console.log("Index result:", indexResult);

var lastIndexResult = nameArr.lastIndexOf("Arun");
console.log("Last index of:", lastIndexResult)

var includeResult = nameArr.includes("Ram");
console.log("Include result:", includeResult);

var filterResult2 = nameArr.filter(function (name) {
    return name.startsWith("S");
})
console.log("Filted Result2:", filterResult2);