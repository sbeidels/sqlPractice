document.addEventListener("DOMContentLoaded", getData);
document.addEventListener("DOMContentLoaded", bindUpdate);

console.log("in update.js");
function getData () {
		var req = new XMLHttpRequest();
		var payload = {};
		var id = document.getElementById("hiddenVal").value;
		payload.id = id;
		console.log(JSON.stringify(payload));
		req.open("POST", "http://52.26.106.49:3000/getRow", true);
		console.log("request open");
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			console.log("In request event listener");
			var response = JSON.parse(req.responseText);
			var data = JSON.parse(response.results);
			console.log(req.responseText);
			document.getElementById('workName').value = data[0].name;
			document.getElementById('reps').value = data[0].reps;
			document.getElementById('weight').value = data[0].weight;
			document.getElementById('date').value = data[0].date;
			if(data[0].lbs == 1) {
				document.getElementById('lbsbutton').checked = true;
			}
			else {
				document.getElementById('kgsbutton').checked = true;
			}
		    //var response = JSON.parse(req.responseText);
			//var dataString = JSON.parse(response.data);
			//document.getElementById("returnedInput").textContent = dataString.textIn;
			//console.log(response.data);
			//console.log(req.responseText);
			//buildTable(data);
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
}		

function bindUpdate() {
	 document.getElementById("updateWork").addEventListener('click', function(event) {
		console.log("in bind buttons");
		var req = new XMLHttpRequest();
		var id = document.getElementById("hiddenVal").value;
		var workName = document.getElementById("workName").value;
		var repsCurrent = document.getElementById("reps").value;
		var weightCurrent = document.getElementById("weight").value;
		var dateCurrent = document.getElementById("date").value;
		var unitsCurrent = document.getElementById("lbsbutton").value;
		var units2Current = document.getElementById("kgsbutton").value;
		console.log(unitsCurrent);
		console.log(units2Current);
		if(document.getElementById("lbsbutton").checked) {
			var units = 1;
			console.log("lbs was checked");
		}
		else {
			var units = 0;
			console.log("kgs was checked");
		}
		
		var payload = {};
		payload.id=id;
		payload.name=workName;
		payload.reps=repsCurrent;
		payload.weight=weightCurrent;
		payload.date=dateCurrent;
		payload.units=units;
		console.log(JSON.stringify(payload));
		req.open("POST", "http://52.26.106.49:3000/update", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			console.log("In request event listener");
			var response = JSON.parse(req.responseText);
			var data = JSON.parse(response.results);
			window.location.assign("http://52.26.106.49:3000/update");
		    //var response = JSON.parse(req.responseText);
			//var dataString = JSON.parse(response.data);
			//document.getElementById("returnedInput").textContent = dataString.textIn;
			//console.log(response.data);
			//console.log(req.responseText);
			buildTable(data);
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  }
