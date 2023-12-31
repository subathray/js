var str = "Hello world";
console.log("String length", str.length);

var indexOf = str.indexOf("e");
console.log("Index of e:", indexOf);

var lastIndexOf = str.lastIndexOf("l")
console.log("Last index of l:", lastIndexOf);

var str2 = "Hello!, How are you ?";
console.log("Str2 before trim:", str2);

var trim = str2.trim();
console.log("After trimming:", trim);

var charAt = str2.charAt(4);
console.log("CharAt:", charAt);

var split = str2.split("");
console.log("Split of", split);

var replace = str2.replace("you", "they");
console.log("After replacing:", replace);

var lowerCase = str2.toLowerCase();
console.log("Lower case:", lowerCase);

var str3 = "Hi";
var str4 = "Hello";

var concat = str3.concat(str4);
console.log(concat);