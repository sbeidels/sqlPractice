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
		console.log(req.responseText);
		//for(var i=0; i<req.responseText.results.length; i++) {
		//	console.log(req.responseText.results[i].name);
		//}
		//console.log("responseText.results");
		//console.log(req.responseText.results);
		var response = JSON.parse(req.responseText);
		var data = JSON.parse(response.results);
		//var response = req.responseText;
		for(var i=0; i<data.length; i++) {
			console.log(data[i].name);
		}
				
		
		var upButton = document.createElement("button");
		upButton.textContent = "Up";
		document.body.appendChild(upButton);
		var tableBody = document.createElement("tbody");
		for(var i=0; i<data.length; i++) {
			for(var j=0; j<4; j++) {
			var newRow = document.createElement("tr");
			var newCellName = document.createElement("td");
			newCellName.textContent = data[i].name;
			var newCellRep = document.createElement("td");
			newCellRep.textContent = data[i].reps;
			var newCellWeight = document.createElement("td");
			newCellWeight.textContent = data[i].weight;
			var newCellDate = document.createElement("td");
			newCellDate.textContent = data[i].date;
			newRow.appendChild(newCellName);
			newRow.appendChild(newCellRep);
			newRow.appendChild(newCellWeight);
			newRow.appendChild(newCellDate);
			}
			tableBody.appendChild(newRow);
		}
		//right now this duplicates table...use .textContent instead of append?
		//var newData = document.createElement("td");
		//newData.textContent = "test";
		//newRow.appendChild(newData);
		//tableBody.appendChild(newRow);
		var child = document.getElementsByTagName("tbody");
		for(var i=0; i<child.length; i++) {
			child[i].parentNode.removeChild(child[i]);
			console.log("node removed");
		}
		
	    document.getElementById("workTable").appendChild = tableBody;
		//console.log(response.reps);
		//var data = req.responseText;
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
			buildTable();
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  
	  }
		