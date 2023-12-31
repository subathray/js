function submitFn() {
    var name = document.getElementById("userName1").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var gender = document.getElementsByClassName("gender1");
    var lang = document.getElementsByClassName("lang1");
    var country = document.getElementById("country1").value;

    if (name == "") {
        alert("Please enter 'user name'");
        return;
    }

    if (email == "") {
        alert("Please enter email");
        return;
    }

    if (password == "") {
        alert("Please enter password");
        return;
    }

    if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
        alert("Please select gender");
        return;
    }

    if (!lang[0].checked && !lang[1].checked && !lang[2].checked) {
        alert("Please select atleat one language");
        return;
    }

    if (country == -1) {
        alert("Please select country");
        return;
    }

    alert("form submitted succesfully")
}