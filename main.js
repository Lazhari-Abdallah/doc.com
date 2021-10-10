


function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var adresse = document.getElementById("adresse").value;
    var date = document.getElementById("date").value;
    var city = document.getElementById("city").value;
    var coment = document.getElementById("coment").value;
    if (name && email && adresse && date && city && coment) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("adresse", adresse);
        localStorage.setItem("date", date);
        localStorage.setItem("city", city);
        localStorage.setItem("coment", coment);
        alert("your information have been saved, be on time")
    } else {
        alert("Missing information");
    }
}

window.onload = function () {
    var name = localStorage.getItem("name");
    var coment = localStorage.getItem("coment");
    var email = localStorage.getItem("email");
    var date = localStorage.getItem("date");

    console.log(name, coment, date, email);
    if (!name || !coment) {
        if (!email || !date) {
        }
        return;
    }
    document.getElementsByClassName("name")[0].innerHTML = name;
    document.getElementsByClassName("coment")[0].innerHTML = coment;
    document.getElementsByClassName("email")[0].innerHTML = email;
    document.getElementsByClassName("date")[0].innerHTML = date;
};
