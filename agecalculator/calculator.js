function calculateAge(birthday) {
    var currentDate = new Date();
    var birthDate = new Date(birthday);
    if (birthDate == "Invalid Date") {
        return "Insert a Valid Birthday";
    } else {
        return ((currentDate - birthDate) / 1000 / 60 / 60 / 24 / 365.2422).toFixed(8);
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setDate(d.getDate() + exdays);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function resetBirthday() {
    var birthday = prompt("Birthday (Month DD YYYY):")
    setCookie("AgeCalculatorBirthday", birthday, 365)
    location.reload(true);
}

if (getCookie("AgeCalculatorBirthday") == "") {
    var birthday = prompt("Birthday (Month DD YYYY):")
    setCookie("AgeCalculatorBirthday", birthday, 365)
}
savedBirthday = getCookie("AgeCalculatorBirthday");
window.setInterval(function () {
    document.getElementById("age").innerHTML = calculateAge(savedBirthday)
}, 100);
