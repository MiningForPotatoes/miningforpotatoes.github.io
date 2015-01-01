

function splashOn(){
var splash = document.getElementById("splash");
splash.style.transition = ".2s";
splash.style.opacity = "0";
splash.innerHTML = "Where the cool kids sit at lunch.";
splash.style.opacity = "1";

}

function splashOff(){
var splash = document.getElementById("splash");
splash.style.transition = ".2s";
splash.style.opacity = "0";
splash.innerHTML = "Minecraft server and gaming community.";
splash.style.opacity = "1";
}
