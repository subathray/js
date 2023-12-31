var x;
var a;

a = 5;
a = 10;

let b = 5;
b = 10;

function test() {              //var functional scope
    var y;

    y = 10;
}

//const pie = 3.14;
//pie = 3.15;

x = 5;

function sampleFn() {
    var a = 5;
    let b = 10;
    if (true) {
        var c = 15;
        let d = 20;
        console.log("a=", a, "b=", b, "c=", c, "d=", d);

        //console.log("a=", a, "b=", b,"c=", c); 
    }
}

sampleFn();

var d;
var e = d || 3;
console.log(e); // if d has value it takes it, if not it takes the default .


var fName = "Arun";
var lName = "Kumar";
var age = 22;
var designation = `Software 
 developer`

console.log(`My name is ${fName} .My last name is  ${lName}.My age and designation is  ${age} and ${designation} respectively.`);

var temp = ` sytfuhvjhvjufkuyduyfyuf fuyfjhg yfujyhvfjuyfy
  tdytfuly uyguyh uygfulygliuh gt iugliterstfckuygk 
  kiyfvjyh uyfvuyfdukyyyfvlyu`;// tilt for multiple lines

if (true) {
    const z = 10;
    z = 16;
    console.log(z);
}