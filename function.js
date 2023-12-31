//function add(){
//    console.log("add function");
//}
//add();

//static function

function display() {
    console.log("It is a display function");
}
display();

function add() {
    var a = 5;
    var b = 4;
    var c = a + b;
    console.log("The sum is ", c)
}
add()

function sub() {
    var a = 5;
    var b = 4;
    var c = a - b;
    console.log("The difference is ", c);
}
sub()

//Dynamic function

function sum(x, y) {
    var a = x;
    var b = y;
    var c = a + b;
    console.log("The sum is ", c);
}
sum(10, 12);
sum(5, 4);

function difference(x, y) {
    var a = x;
    var b = y;
    var c = a - b;
    console.log("The diffenrence is ", c);
}
difference(10, 12);
difference(5, 4);