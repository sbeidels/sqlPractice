console.log("in client js");
document.addEventListener("DOMContentLoaded", bindButtons);
document.addEventListener("DOMContentLoaded", buildTable);
console.log("in client js");

function buildTable() {
	console.log("in build table");
	var req = new XMLHttpRequest();
	req.open("GET", "http://52.26.106.49:3000/table", true);
	req.addEventListener("load", function() {
		if(req.status >=200 && req.status < 400) {
			
		
		console.log("in get request listener");
		var response = JSON.parse(req.responseText);
		var data = JSON.parse(response.results);
		//var response = req.responseText;
		console.log(response);
		console.log(data);
		
		var upButton = document.createElement("button");
		upButton.textContent = "Up";
		document.body.appendChild(upButton);
		var tableBody = document.createElement("tbody");
		var newRow = document.createElement("tr");
		var newData = document.createElement("td");
		newData.textContent = "test";
		newRow.appendChild(newData);
		tableBody.appendChild(newRow);
	    document.getElementById("workData").appendChild(tableBody);
		console.log(response.reps);
		var data = req.responseText;
		//document.body.appendChild(newTable);
		
		}
		else {
			console.log("Error in network request: " + req.statusText);
		}
	});
	req.send(null);
	console.log("request sent");
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
		