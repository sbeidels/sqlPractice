console.log("in client js");
document.addEventListener("DOMContentLoaded", bindButtons);
document.addEventListener("DOMContentLoaded", buildTable);
console.log("in client js");

function buildTable {
	var req = new XMLHttpRequest();
	req.open("GET", "http://http://52.26.106.49:3000/", true);
	req.addEventListener("load", function() {
		if(req.status >=200 && req.status < 400) {
			
		
		console.log("in get request listener");
		var response = JSON.parse(req.responseText);
		var newTable = document.createElement("table");
	    var headerRow = document.createElement("thead");
	    for(var i=1; i<=5; i++) {
			var newHeader = document.createElement("th");
			newHeader.style.border = 1px solid black;
			newHeader.textContent = "Header " + i;
		}
		newTable.appendChild(headerRow);
		var tableBody = document.createElement("tbody");
		var data = req.responseText;
		
		}
		else {
			console.log("Error in network request: " + req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();
	
}

	  
	  function bindButtons() {
	    document.getElementById("newWork").addEventListener('click', function(event) {
		console.log("in bind buttons");
		var req = new XMLHttpRequest();
		var workName = document.getElementById("workName").value;
		var repsCurrent = document.getElementById("reps").value;
		var weightCurrent = document.getElementById("weight").value;
		var dateCurrent = document.getElementById("date").value;
		//var unitsCurrent = document.getElementById("lbsbutton").value;
		//var units2Current = document.getElementById("kgsbutton").value;
		
		
		var payload = {};
		payload.name=workName;
		payload.reps=repsCurrent;
		payload.weight=weightCurrent;
		payload.date=dateCurrent;
		console.log(JSON.stringify(payload));
		req.open("POST", "http://52.26.106.49:3000/insert", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			console.log("In request event listener");
		    //var response = JSON.parse(req.responseText);
			//var dataString = JSON.parse(response.data);
			//document.getElementById("returnedInput").textContent = dataString.textIn;
			//console.log(response.data);
			console.log(req.responseText);
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  
	  }
		