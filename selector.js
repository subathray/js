function hideFn() {
    document.getElementById("pTag").style.display = "none";
    document.getElementById("pTag2").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("hidebtn").style.display = "none";

};

function showFn() {
    document.getElementById("pTag").style.display = "block";
    document.getElementById("pTag2").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("showbtn").style.display = "block";
};

function getFn() {
    var name = document.getElementById("name1").value;
    alert(name);
    var email = document.getElementById("email1").value;
    console.log(email);
};

function displayFn() {
    var name2 = document.getElementById("name2").value;
    document.getElementById("name3").value = name2;
};

function printFn() {
    var name4 = document.getElementById("name4").value;
    document.getElementById("pTag3").innerHTML = name4;
}

function getputFn() {
    var pValue = document.getElementById("pTag4").innerHTML;
    document.getElementById("name5").value = pValue;
}