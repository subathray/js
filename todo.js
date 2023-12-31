var nameArr = [];
var indexToEdit;

function addFn() {
    var name = document.getElementById("name").value;
    if (name == "") {
        return;
    }

    nameArr.push(name);
    displayFn();
    document.getElementById("name").value = "";
}

function displayFn() {
    var temp = "";
    for (var i = 0; i < nameArr.length; i++) {
        temp += `<tr>
                <td> ${nameArr[i]}</td>
                <td><button onclick='editFn(${i})'>Edit</button></td>
                <td><button onclick='delFn(${i})'>Delete</button></td>
                </tr>`
    }
    document.getElementById("tbody").innerHTML = temp;
    //document.getElementById("name").value = "";
}

function editFn(index) {
    indexToEdit = index;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("name").value = nameArr[index];
}

function delFn(index) {
    var result = confirm("Do you want to delete?")
    if (result == true) {
        nameArr.splice(index, 1);
        alert("Deleted successfully!");
        displayFn();
    }
}

function loadFn() {
    document.getElementById("updateBtn").style.display = "none";
}

function updateFn() {
    var name = document.getElementById("name").value;
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
    nameArr[indexToEdit] = name;
    displayFn();
    document.getElementById("name").value = "";
}