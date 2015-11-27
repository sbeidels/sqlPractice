document.addEventListener("DOMContentLoaded", bindButtons);
	  
	  function bindButtons() {
	    document.getElementById("newWork").addEventListener('click', function(event) {
		
		var req = new XMLHttpRequest();
		var workName = document.getElementById("workName").value;
		var repsCurrent = document.getElementById("reps").value;
		var weightCurrent = document.getElementById("weight").value;
		var dateCurrent = document.getElementById("date").value;
		var unitsCurrent = document.getElementById("lbsbutton").value;
		var units2Current = document.getElementById("kgsbutton").value;
		console.log(units);
		console.log(units2);
		
		var payload = {name:workName}, {reps:repsCurrent}, {weight:weightCurrent}, {date:dateCurrent};
		req.open("POST", "http://http://52.26.106.49:3000/insert", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			console.log("In request event listener");
		    var response = JSON.parse(req.responseText);
			var dataString = JSON.parse(response.data);
			//document.getElementById("returnedInput").textContent = dataString.textIn;
			console.log(response.data);
			console.log(req.responseText);
			}
		  else {
		    console.log("Error in network request: " + request.statusText);
		}});
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  
	  }
		