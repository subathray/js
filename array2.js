var langArr = ["Tamil", "English", "Hindi", "Telugu"];

langArr[4] = "Urudu";
console.log("The added language is:", langArr);

langArr[3] = "Malayalam";
console.log("After replacing:", langArr)

console.log(langArr[0]);

for (var i = 0; i < langArr.length; i++){
    console.log(langArr[i]);
}