var ip = "miningforpotatoes.com";
var query = document.getElementById("query");


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://198.50.146.38/ping.php?ip=" + ip, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    data = JSON.parse(xhr.responseText);
    if (data.max) {
      query.innerHTML = data.online + "/" + data.max + "<br/>";

      for (i = 0; i <= data.online; i++){
        query.innerHTML += "<img src=\"http://cravatar.eu/head/" + data.sample[i].name + "/48\" data-tooltip=\"text\" title=\"" + data.sample[i].name + "\"></img>";
      };
    } else {
      query.innerHTML = "The server is Offline :(";
    }
  }
}
xhr.send();

setInterval(function () {
  xhr.send
}, 300000);
