

//document.cookie = "fName=Raul; expires=Mon, 30 Jun 2025 12:00:00 UTC; path=/";
//document.cookie = "lName=Gonzalez; expires=Mon, 30 Jun 2025 12:30:00 UTC; path=/";

let myCookie = document.cookie;

console.log(document.cookie);

deleteCookie("fName");

function setCookie(name, value, daysOfCookie) {
    const date = new Date();
    date.setTime(date.getTime() + (daysOfCookie * 24 * 60 * 60 * 1000) )
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}