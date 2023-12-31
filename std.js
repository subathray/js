var stdArr = []
var indexFromEdit;

function addFn() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var department = document.getElementById("dept").value;

    if (name == "") {
        alert("Please enter user name:");
        return;
    }

    if (age == "") {
        alert("Please enter age:")
        return;
    }

    if (department == "") {
        alert("Please enter department:")
        return;
    }

    var stdObj = {
        name: name,
        age: age,
        dept: department
    }

    stdArr.push(stdObj);
    //console.log("Student array", stdArr);             - optional
    displayFn();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dept").value = "";
}

function displayFn() {
    var temp = "";

    for (var i = 0; i < stdArr.length; i++) {
        temp += `<tr>
                 <td>${stdArr[i].name}</td>
                 <td>${stdArr[i].age}</td>
                 <td>${stdArr[i].dept}</td>
                 <td><button onclick='editFn(${i})'>Edit</button>
                 <td><button onclick='delFn(${i})'>Delete</button>
                 </tr>`
    }

    document.getElementById("tbody").innerHTML = temp;
}

function editFn(index) {
    indexFromEdit = index;
    document.getElementById("name").value = stdArr[index].name;
    document.getElementById("age").value = stdArr[index].age;
    document.getElementById("dept").value = stdArr[index].dept;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";
}

function loadFn() {
    document.getElementById("updateBtn").style.display = "none";
}

function updateFn() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dept = document.getElementById("dept").value;

    var stdObj = {
        name: name,
        age: age,
        dept: dept
    }

    stdArr[indexFromEdit] = stdObj;
    displayFn();

    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dept").value = "";
}

function delFn(index) {
    var result = confirm("Do you want to delete?");
    if (result == true) {
        stdArr.splice(index, 1);
        displayFn();
        alert("Deleted successfully!");
    }
}