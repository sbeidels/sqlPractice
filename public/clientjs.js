console.log("in client js");
document.addEventListener("DOMContentLoaded", bindButtons);
document.addEventListener("DOMContentLoaded", iniBuildTable);
console.log("in client js");

function buildTable(data) {
	console.log("in build table");
	
		for(var i=0; i<data.length; i++) {
			console.log(data[i].name);
		}
		var oldTable = document.getElementById("workData");
		var child = document.getElementsByTagName("tbody");
		for(var i=0; i<child.length; i++) {
			oldTable.removeChild(child[i]);
			console.log("node removed");
		}
				
		
		
		var tableBody = document.createElement("tbody");
		for(var i=0; i<data.length; i++) {
			var newRow = document.createElement("tr");
						
			var newCellName = document.createElement("td");
			newCellName.textContent = data[i].name;
			var newCellRep = document.createElement("td");
			newCellRep.textContent = data[i].reps;
			var newCellWeight = document.createElement("td");
			newCellWeight.textContent = data[i].weight;
			var newCellDate = document.createElement("td");
			newCellDate.textContent = data[i].date;
			var newCellUnits = document.createElement("td");
			newCellUnits.textContent = data[i].lbs;
			newRow.appendChild(newCellName);
			newRow.appendChild(newCellRep);
			newRow.appendChild(newCellWeight);
			newRow.appendChild(newCellDate);
			newRow.appendChild(newCellUnits);
			tableBody.appendChild(newRow);
			oldTable.appendChild(tableBody);
			
			
			var newDelete = document.createElement("td");
			newRow.appendChild(newDelete);
			
			var deleteButton = document.createElement("input");
			deleteButton.type = "submit";
			deleteButton.name = "delete";
			
			newDelete.appendChild(deleteButton);
			var deleteCell = document.getElementsByName("delete");
			console.log(deleteCell.length);
			console.log(i);
			deleteCell[i].addEventListener('click', function (event) {
				console.log("in event listener");
				console.log(event);
				console.log(this.name);
				var sib = this.nextSibling;
				console.log(sib.name);
				console.log(sib.value);
				deleteRow(sib.value);
			});	
			var formInHide = document.createElement("input");
			formInHide.type = "hidden";
			formInHide.name = "id";
			formInHide.value = data[i].id;
			newDelete.appendChild(formInHide);
			
			var newUpdate = document.createElement("td");
			newRow.appendChild(newUpdate);
			
			var updateButton = document.createElement("input");
			updateButton.type = "submit";
			updateButton.name = "update";
			
			newUpdate.appendChild(updateButton);
			var updateCell = document.getElementsByName("update");
			console.log(updateCell.length);
			console.log(i);
			updateCell[i].addEventListener('click', function (event) {
				console.log("in event listener");
				console.log(event);
				console.log(this.name);
				var sib = this.nextSibling;
				console.log(sib.name);
				console.log(sib.value);
				updateRow(sib.value);
			});	
			var formUpHide = document.createElement("input");
			formUpHide.type = "hidden";
			formUpHide.name = "id";
			formUpHide.value = data[i].id;
			newUpdate.appendChild(formUpHide);
			
			}
		
		
}

function iniBuildTable() {
	console.log("in ini build table");
	var req = new XMLHttpRequest();
	req.open("GET", "http://52.26.106.49:3000/table", true);
	console.log("request open");
	req.addEventListener("load", function() {
		console.log("in ini load");
	if(req.status >=200 && req.status < 400) {
		console.log("in if");
		console.log(req.responseText);
		var oldTable = document.getElementById("workData");
		var child = document.getElementsByTagName("tbody");
		for(var i=0; i<child.length; i++) {
			oldTable.removeChild(child[i]);
			console.log("node removed");
		}
		
	   
		var response = JSON.parse(req.responseText);
		var data = JSON.parse(response.results);
		//var response = req.responseText;
		
		var tableBody = document.createElement("tbody");
		for(var i=0; i<data.length; i++) {
			var newRow = document.createElement("tr");
			
			
			var newCellName = document.createElement("td");
			newCellName.textContent = data[i].name;
			var newCellRep = document.createElement("td");
			newCellRep.textContent = data[i].reps;
			var newCellWeight = document.createElement("td");
			newCellWeight.textContent = data[i].weight;
			var newCellDate = document.createElement("td");
			newCellDate.textContent = data[i].date;
			var newCellUnits = document.createElement("td");
			newCellUnits.textContent = data[i].lbs;
			newRow.appendChild(newCellName);
			newRow.appendChild(newCellRep);
			newRow.appendChild(newCellWeight);
			newRow.appendChild(newCellDate);
			newRow.appendChild(newCellUnits);
			tableBody.appendChild(newRow);
			oldTable.appendChild(tableBody);
			var newDelete = document.createElement("td");
			newRow.appendChild(newDelete);
			
			var deleteButton = document.createElement("input");
			deleteButton.type = "submit";
			deleteButton.name = "delete";
			//deleteButton.onclick = deleteRow();
			newDelete.appendChild(deleteButton);
			
			var deleteCell = document.getElementsByName("delete");
			console.log(deleteCell.length);
			console.log(i);
			console.log("data id is: " + data[i].id);
			//var id = data[i].id;
			//console.log("id is " + id);
			deleteCell[i].addEventListener('click', function (event) {
				console.log("in event listener");
				console.log(event);
				console.log(this.name);
				var sib = this.nextSibling;
				console.log(sib.name);
				console.log(sib.value);
				deleteRow(sib.value);
			});	
			var formInHide = document.createElement("input");
			formInHide.type = "hidden";
			formInHide.name = "id";
			formInHide.value = data[i].id;
			newDelete.appendChild(formInHide);
			
			var newUpdate = document.createElement("td");
			newRow.appendChild(newUpdate);
			
			var updateButton = document.createElement("input");
			updateButton.type = "submit";
			updateButton.name = "update";
			
			newUpdate.appendChild(updateButton);
			var updateCell = document.getElementsByName("update");
			console.log(updateCell.length);
			console.log(i);
			updateCell[i].addEventListener('click', function (event) {
				console.log("in event listener");
				console.log(event);
				console.log(this.name);
				var sib = this.nextSibling;
				console.log(sib.name);
				console.log(sib.value);
				updateRow(sib.value);
			});	
			var formUpHide = document.createElement("input");
			formUpHide.type = "hidden";
			formUpHide.name = "id";
			formUpHide.value = data[i].id;
			newUpdate.appendChild(formUpHide);
			
			
		}
		
		
		
	}
	else {
		    console.log("Error in network request: " );
	}
	
	
	});
		
	req.send(null);
	console.log("request sent");
	
	
}

	  
	  function bindButtons() {
	    document.getElementById("newWork").addEventListener('click', function(event) {
		console.log("in bind buttons");
		var req = new XMLHttpRequest();
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
		payload.name=workName;
		payload.reps=repsCurrent;
		payload.weight=weightCurrent;
		payload.date=dateCurrent;
		payload.units=units;
		console.log(JSON.stringify(payload));
		req.open("POST", "http://52.26.106.49:3000/insert", true);
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
			buildTable(data);
			}
		  else {
		    console.log("Error in network request: " );
		}});
		
        req.send(JSON.stringify(payload));
		event.preventDefault();
		
	  });
	  }
	  /*document.getElementById("workData").addEventListener('click', function(event) {
		  console.log("in table listener");
		  console.log(event.target);
		  console.log(event.target.value);
		  console.log(event.target.name);
		  if(event.target.value = "delete"){
		  var payload = {};
		  payload.id = event.target.id;
		  var delReq = new XMLHttpRequest();
		  //if(event.target.name = "delete") {
			delReq.open("POST", "http://52.26.106.49:3000/delete", true);
		    delReq.setRequestHeader("Content-Type", "application/json");
		    delReq.addEventListener("load", function() {
		      if (delReq.status >= 200 && delReq.status < 400) {
				  var response = JSON.parse(delReq.responseText);
			var data = JSON.parse(response.results);
			console.log("In delete request event listener");
		   	console.log(delReq.responseText);
			buildTable(data);
			}
		  else {
		    console.log("Error in network request: " );
		}
		});
		
        delReq.send(JSON.stringify(payload));
		event.preventDefault();
		  
		//  }
		  event.stopPropagation();
	  }
	  else {
		  console.log("not delete");
		  if(event.target.value = "update") {
			  var payload = {};
			  payload.id = event.target.id;
			  var upReq = new XMLHttpRequest();
			  upReq.open.open("POST", "http://52.26.106.49:3000/getRow", true);
		      upReq.setRequestHeader("Content-Type", "application/json");
		      upReq.addEventListener("load", function() {
		      if (delReq.status >= 200 && delReq.status < 400) {
				  var response = JSON.parse(delReq.responseText);
			      var data = JSON.parse(response.results);
			      
		   	      console.log(delReq.responseText);
			      buildTable(data);
				  console.log("In update request event listener");
			  }
		    else {
		    console.log("Error in network request: " );
		}
		});
		
        upReq.send(JSON.stringify(payload));
		event.preventDefault();
		  
		//  }
		  event.stopPropagation();
		  }
	  }
	  }); 
	  }*/
	  
		
function deleteRow(id) {
	console.log("In delete row");
	console.log(id);
	var payload = {};
	payload.id = id;
	var delReq = new XMLHttpRequest();
		 
	delReq.open("POST", "http://52.26.106.49:3000/delete", true);
	delReq.setRequestHeader("Content-Type", "application/json");
	delReq.addEventListener("load", function() {
		if (delReq.status >= 200 && delReq.status < 400) {
			var response = JSON.parse(delReq.responseText);
			var data = JSON.parse(response.results);
			console.log("In delete request event listener");
		   	console.log(delReq.responseText);
			buildTable(data);
			}
		  else {
		    console.log("Error in network request: " );
		}
		});
		
        delReq.send(JSON.stringify(payload));
		event.preventDefault();
		  
	
}

function updateRow(id) {
	console.log("in update row");
	console.log(id); 
	//var payload = {};
	//payload.id = id;
	var upReq = new XMLHttpRequest();
	upReq.open("GET", "http://52.26.106.49:3000/logID?id=" + id, true);
	upReq.addEventListener("load", function() {
	if (upReq.status >= 200 && upReq.status < 400) {
		console.log("in load if");
		//var response = JSON.parse(upReq.responseText);
			//var data = JSON.parse(response.results);
			console.log("In update request event listener");
	        console.log(upReq.responseText);
		
		
	    }
		    else {
		    console.log("Error in network request: " );
		}
		});
		
        upReq.send(null);
		event.preventDefault();
}