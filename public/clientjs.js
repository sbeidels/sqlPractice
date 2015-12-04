console.log("in client js");
document.addEventListener("DOMContentLoaded", bindButtons);
document.addEventListener("DOMContentLoaded", iniBuildTable);
console.log("in client js");

function buildTable(data) {
	console.log("in build table");
	//var req = new XMLHttpRequest();
	//req.open("GET", "http://52.26.106.49:3000/table", true);
	//req.addEventListener("load", function() {
	//	if(req.status >=200 && req.status < 400) {
			
		
		//console.log("in get request listener");
		//console.log(req.responseText);
		//for(var i=0; i<req.responseText.results.length; i++) {
		//	console.log(req.responseText.results[i].name);
		//}
		//console.log("responseText.results");
		//console.log(req.responseText.results);
		//var response = JSON.parse(req.responseText);
		//var data = JSON.parse(response.results);
		//var response = req.responseText;
		for(var i=0; i<data.length; i++) {
			console.log(data[i].name);
		}
				
		
		//var upButton = document.createElement("button");
		//upButton.textContent = "Up";
		//document.body.appendChild(upButton);
		var tableBody = document.createElement("tbody");
		for(var i=0; i<data.length; i++) {
			var newRow = document.createElement("tr");
			//for(var j=0; j<5; j++) {
			
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
			var newDelete = document.createElement("td");
			var deleteForm = document.createElement("form");
			deleteForm.name = "deleteForm";
			var formInHide = document.createElement("input");
			formInHide.type = "hidden";
			formInHide.value = data[i].id;
			formInHide.id = data[i].id;
			//console.log(formInHide.value);
			formInHide.name = "Delete";
			var deleteButton = document.createElement("input");
			deleteButton.type = "submit";
			deleteButton.value = "delete";
			deleteButton.onclick = deleteRow();
			
				
			//deleteButton.onclick=deleteRow(data[i].id);
			deleteForm.appendChild(formInHide);
			deleteForm.appendChild(deleteButton);
			newDelete.appendChild(deleteForm);
			var newUpdate = document.createElement("td");
			var updateForm = document.createElement("form");
			updateForm.name = "updateForm";
			var formUpHide = document.createElement("input");
			formUpHide.type = "hidden";
			formUpHide.value = data[i].id;
			formUpHide.id = data[i].id;
			//console.log(formInHide.value);
			formUpHide.name = "Update";
			var updateButton = document.createElement("input");
			updateButton.type = "submit";
			updateButton.value = "update";
			updateButton.name = "update";
			updateButton.id = data[i].id;
			
				
			//deleteButton.onclick=deleteRow(data[i].id);
			updateForm.appendChild(formUpHide);
			updateForm.appendChild(updateButton);
			newUpdate.appendChild(updateForm);
			newRow.appendChild(newCellName);
			newRow.appendChild(newCellRep);
			newRow.appendChild(newCellWeight);
			newRow.appendChild(newCellDate);
			newRow.appendChild(newCellUnits);
			newRow.appendChild(newDelete);
			newRow.appendChild(newUpdate);
			
			//}
			tableBody.appendChild(newRow);
		}
		
		
		//right now this duplicates table...use .textContent instead of append?
		//var newData = document.createElement("td");
		//newData.textContent = "test";
		//newRow.appendChild(newData);
		//tableBody.appendChild(newRow);
		var oldTable = document.getElementById("workData");
		var child = document.getElementsByTagName("tbody");
		for(var i=0; i<child.length; i++) {
			oldTable.removeChild(child[i]);
			console.log("node removed");
		}
		
	    oldTable.appendChild(tableBody);
		//console.log(response.reps);
		//var data = req.responseText;
		//document.body.appendChild(newTable);
		
		
	
	
	
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
			
		
		//console.log("in get request listener");
		//console.log(req.responseText);
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
				
		
		//var upButton = document.createElement("button");
		//upButton.textContent = "Up";
		//document.body.appendChild(upButton);
		var tableBody = document.createElement("tbody");
		for(var i=0; i<data.length; i++) {
			var newRow = document.createElement("tr");
			//for(var j=0; j<5; j++) {
			
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
			var newDelete = document.createElement("td");
			var deleteForm = document.createElement("form");
			deleteForm.name = "deleteForm";
			var formInHide = document.createElement("input");
			formInHide.type = "hidden";
			formInHide.value = data[i].id;
			formInHide.id = data[i].id;
			console.log(formInHide.value);
			formInHide.name = "Delete";
			var deleteButton = document.createElement("input");
			deleteButton.type = "submit";
			deleteButton.value = "delete";
			deleteButton.onclick = deleteRow();
			
				
			//deleteButton.onclick=deleteRow(data[i].id);
			deleteForm.appendChild(formInHide);
			deleteForm.appendChild(deleteButton);
			newDelete.appendChild(deleteForm);
			var newUpdate = document.createElement("td");
			var updateForm = document.createElement("form");
			updateForm.name = "updateForm";
			var formUpHide = document.createElement("input");
			formUpHide.type = "hidden";
			formUpHide.value = data[i].id;
			formUpHide.id = data[i].id;
			//console.log(formInHide.value);
			formUpHide.name = "Update";
			var updateButton = document.createElement("input");
			updateButton.type = "submit";
			updateButton.value = "update";
			updateButton.name = "update";
			updateButton.id = data[i].id;
			
				
			//deleteButton.onclick=deleteRow(data[i].id);
			updateForm.appendChild(formUpHide);
			updateForm.appendChild(updateButton);
			newUpdate.appendChild(updateForm);
			newRow.appendChild(newCellName);
			newRow.appendChild(newCellRep);
			newRow.appendChild(newCellWeight);
			newRow.appendChild(newCellDate);
			newRow.appendChild(newCellUnits);
			newRow.appendChild(newDelete);
			newRow.appendChild(newUpdate);
			//}
			tableBody.appendChild(newRow);
		}
		
		
		//right now this duplicates table...use .textContent instead of append?
		//var newData = document.createElement("td");
		//newData.textContent = "test";
		//newRow.appendChild(newData);
		//tableBody.appendChild(newRow);
		var oldTable = document.getElementById("workData");
		var child = document.getElementsByTagName("tbody");
		for(var i=0; i<child.length; i++) {
			oldTable.removeChild(child[i]);
			console.log("node removed");
		}
		
	    oldTable.appendChild(tableBody);
		//console.log(response.reps);
		//var data = req.responseText;
		//document.body.appendChild(newTable);
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
	  
		
function deleteRow() {
	console.log("In delete row");
	var current = window.event.srcElement;
	console.log(current);
	//console.log(row.formInHide.id);
}