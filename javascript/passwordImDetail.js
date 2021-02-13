const password = "19"

function ValidatePassword() {
    var userPassword = document.querySelector("input").value;
    if (userPassword == password){
        window.open("../html/im-detail.html");
        window.close()
    }
}
