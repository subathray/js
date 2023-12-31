function greetFn() {
    var name = document.getElementById("name").value;
    alert("Hello " + name);
}

var numbers = [5, 10, 15];
    document.getElementById("pTag").innerHTML = numbers.reduce(sumFn);
function sumFn(totals, num) {
    
    return totals + num;
    
}