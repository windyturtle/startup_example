function loginOffline() {
    const name = document.querySelector("#desiredName");
    if(name.value.length > 0) {
        localStorage.setItem("userName", name.value);
        window.location.href = "play.html";
    }
}

function loginOnline() {
    const name = document.querySelector("#desiredName");
    if(name.value.length > 0) {
        localStorage.setItem("userName", name.value);
        window.location.href = "online.html";
    }
}