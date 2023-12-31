var stdObj = {
    name: "Ram",
    age : 25,
    dept: "CSE"
}
console.log(stdObj);

stdObj.id = 101;
console.log("After adding id", stdObj);

stdObj.hobby = "Playing";
console.log("After adding hobby", stdObj);

//anoter method

stdObj["lang"] = "Tamil";
console.log("After adding language", stdObj);

//deleting from a object

delete stdObj.age;
console.log("After deleting age", stdObj);

delete stdObj.name;
console.log("After deleting name", stdObj);

//printing particular key

console.log("Language is", stdObj.lang);

//replacing particular value

stdObj.dept = "ECE";
console.log("After replacing", stdObj);