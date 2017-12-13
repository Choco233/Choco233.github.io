function msg() {
    console.log("hello visitor");
}

function cat(t) {
    t.parentNode.style.display="none";
    document.getElementById("cat").style.display="block";
}

function dog(t) {
    t.parentNode.style.display="none";
    document.getElementById("dog").style.display="block";
}

function hamster(t) {
    t.parentNode.style.display="none";
    document.getElementById("hamster").style.display="block";
}

function rabbit(t) {
    t.parentNode.style.display="none";
    document.getElementById("rabbit").style.display="block";
}

function update_name() {
    var new_name = document.getElementById("input_name").value;
    var gender;

    var names = document.getElementsByClassName("name");
    var radios = document.getElementsByName("gender");

    for (var i = 0; i < radios.length; i ++) {
        if (radios[i].checked) {
            gender = radios[i].value;
        }
    }

    console.log(names);
    for (var i=0; i < names.length; i ++) {
        names[i].innerText = new_name;
    }

    if (gender == "m") {
        document.getElementsByClassName("he")[0].style.display="block";
    } else if (gender == "f") {
        document.getElementsByClassName("she")[0].style.display="block";
    }

    document.getElementsByTagName("form")[0].style.display="none";

}