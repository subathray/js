//alert("Hi");
//confirm("Do you want to delete?");
//prompt("Enter user name:");

function deleteFn() {
    var result = confirm("Do you want to delete?");
    console.log(result);
    if (result == true) {
        alert("Deleted successfully!");
    }else {
        alert("Not deleted!");
    }

}

function enterFn(){
    var name = prompt("Enter User Name:");
    console.log(name);
}