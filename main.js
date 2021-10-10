function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var adresse = document.getElementById("adresse").value;
    var date = document.getElementById("date").value;
    var city = document.getElementById("city").value;
    var coment = document.getElementById("coment").value;
    if (name && email &&adresse&&date&&city&&coment) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("adresse", adresse);
        localStorage.setItem("date", date);
        localStorage.setItem("city", city);
        localStorage.setItem("coment", coment);

    } else {
        alert("Missing information");
    }
}

window.onload = function () {
    var name = localStorage.getItem("name");
    var coment = localStorage.getItem("coment");

    console.log(name, coment);
    if (!name || !coment) {
        return;
    }
    document.getElementsByClassName("name")[0].innerText = name;
    document.getElementsByClassName("coment")[0].innerText =coment;
};
