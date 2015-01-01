setInterval(function(){
var splashId = document.getElementById("splash");


splashes = ["BMW", "Volvo", "Saab", "Ford"];
splash = "";
var i;
for (i = 0; i < splashes.length; i++) {
    splash += splashes[i];
};


splashId.style.opacity = "0";
splashId.innerHTML = splash;
splashId.style.opacity = "1";
 }, 5000);