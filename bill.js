function calculateFn() {
    var cost = document.getElementById("cost1").value;
    var tips = document.getElementById("tips1").value;
    var total = parseInt(cost) + parseInt(tips);

    var persons = document.getElementById("npersons").value;

    var share = parseInt(total) / parseInt(persons);
    document.getElementById("pTag1").innerHTML = share;

    if (cost == "") {
        alert("Please enter cost");
        return;
    }

    if (tips == "") {
        alert("Please enter tips");
        return;
    }

    if (persons == "") {
        alert("Please enter number of persons");
        return;
    }

}