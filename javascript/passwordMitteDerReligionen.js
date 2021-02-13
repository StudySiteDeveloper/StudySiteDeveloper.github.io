const password = "19"

function ValidatePassword() {
    var userPassword = document.querySelector("input").value;
    if (userPassword == password){
        window.open("../html/die-mitte-der-religion(en).html");
        window.close();
    }
}
