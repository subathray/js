function timeoutFn() {
    setTimeout(function () {
        alert("setTimeout")
    }, 5000)
}

function hideFn() {
    setTimeout(function () {
        document.getElementById("pTag").style.display = "none";
    }, 3000)
}

function showFn() {
    setTimeout(function () {
        document.getElementById("pTag").style.display = "block"
    }, 7000)
}

function printFn() {
    setInterval(function () {
        console.log("Hi")
    }, 5000)

}