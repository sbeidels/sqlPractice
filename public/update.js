document.addEventListener("DOMContentLoaded", getData);

console.log("in update.js");
function getData () {
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
			console.log(req.responseText);
			document.getElementById('workName').value = data[0].id;
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