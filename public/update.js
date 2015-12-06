/*Sarah Beidelschies
  CS 290
  Databases and UI
  Update js
*/

document.addEventListener("DOMContentLoaded", getData);
document.addEventListener("DOMContentLoaded", bindUpdate);


/*get row of data using id from update.handlebars
  auto fill in form using data*/
  
function getData () {
		var req = new XMLHttpRequest();
		var payload = {};
		var id = document.getElementById("hiddenVal").value;
		payload.id = id;
		req.open("POST", "http://52.26.106.49:3000/getRow", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			var data = JSON.parse(response.results);
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
		    
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
}		

/*create event listener for update button
  submit data from form to server update
  send user back to home page
*/
function bindUpdate() {
	 document.getElementById("updateWork").addEventListener('click', function(event) {
		
		var req = new XMLHttpRequest();
		var id = document.getElementById("hiddenVal").value;
		var workName = document.getElementById("workName").value;
		var repsCurrent = document.getElementById("reps").value;
		var weightCurrent = document.getElementById("weight").value;
		var dateCurrent = document.getElementById("date").value;
		var unitsCurrent = document.getElementById("lbsbutton").value;
		var units2Current = document.getElementById("kgsbutton").value;
		if(document.getElementById("lbsbutton").checked) {
			var units = 1;
			
		}
		else {
			var units = 0;
			
		}
		
		var payload = {};
		payload.id=id;
		payload.name=workName;
		payload.reps=repsCurrent;
		payload.weight=weightCurrent;
		payload.date=dateCurrent;
		payload.units=units;
		req.open("POST", "http://52.26.106.49:3000/update", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function() {
		  if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			var data = JSON.parse(response.results);
			window.location.assign("http://52.26.106.49:3000/");
		    
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  }
