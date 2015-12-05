document.addEventListener("DOMContentLoaded", getData);


function getData () {
document.getElementById("editNum").addEventListener('click', function(event) {
	var req = new XMLHttpRequest();
	var payload = {};
		payload.id = getElementById("editNum").textContent;
		console.log(JSON.stringify(payload));
		req.open("POST", "http://52.26.106.49:3000/getRow", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			console.log("In request event listener");
			var response = JSON.parse(req.responseText);
			var data = JSON.parse(response.results);
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
		
	  });
	  
}		