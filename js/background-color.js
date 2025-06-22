
// cookie to change color
//document.cookie = "userPrefColor=blue; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";

//document.cookie = "lName=Gonzalez; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";

var btn = document.getElementById("btn");
btn.addEventListener("click", setMyCookie);

var colorPicker = document.getElementById("myColor");

/////////setting the cookie color
function setMyCookie() {

    //var userPrefColor = 'magenta';
    var userPrefColor = colorPicker.value;
    //alert(userPrefColor);
    document.cookie = "userPrefColor="+userPrefColor+"; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";
    document.body.style.backgroundColor=userPrefColor;
    colorPicker.value=userPrefColor;

}

console.log(document.cookie);

////////retrieving cookie values
function getCookieByName(name) {

    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {

        cookie=cookie.trim();

        if(cookie.startsWith(name+"=")) {
            return cookie.substring(name.length+1);
        }

    }

       return null;

}



// check cookie
var cookieColorExists = getCookieByName("userPrefColor");
document.body.style.backgroundColor=cookieColorExists;
colorPicker.value=cookieColorExists;