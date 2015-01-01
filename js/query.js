var ip;
var port;

function loadSettings () {
	ip = localStorage["server_ip"];
	if (!ip) {
		ip = "107.182.143.30";
	}
	document.getElementById("ip").value = ip;
	
	port = localStorage["server_port"];
	if (!port) {
		port = "25565";
	}
	document.getElementById("port").value = port;
}

function retrieveInfo () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://s.rightawake.com/queryd/query.php?ip=miningforpotatoes.com&port=25565&mode=1&size=128", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			data = JSON.parse(xhr.responseText);
			if (data.online) {
				document.getElementById("status").innerHTML = "Players (<b>" + data.players.online + "/" + data.players.max + "</b>):<br/>";
				if (data.players.online < 1){
					document.getElementById("status").className = "hidden";
					} else {
					document.getElementById("status").className = "visible";
					};
				for(var i=0; i<data.players.list.length; i++) {
					document.getElementById("status").innerHTML += "<img src='https://cravatar.eu/head/" + data.players.list[i].name + "/48.png' title=" + data.players.list[i].name + ">" + " "; //Thought you might like it if I made a player's name appear when you hover over their head.
				}
			} else {
				document.getElementById("status").innerHTML = "<h2><font color='#990000'>Server offline!</font></h2>";
			}
		}
	}
	xhr.send();
}

function save_options () {
	ip = "miningforpotatoes.com";
	port = "25565";
	
	localStorage["server_ip"] = ip;
	localStorage["server_port"] = port;
	
	var saved = document.getElementById("saved");
	saved.innerHTML = "Options Saved, re-open the extension window.";
	setTimeout(function() {
		saved.innerHTML = "";
	}, 2000);
}

//document.querySelector('#save').addEventListener('click', save_options);
//document.addEventListener('DOMContentLoaded', function () {
//	loadSettings();
//	retrieveInfo();
//});

window.setInterval(function(){
  loadSettings();
  retrieveInfo();
}, 5000);