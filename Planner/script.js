//bring all stored tasks.
var allTasks = [];
allTasks = getStoredTasks();
console.log(allTasks);

//display all tasks to dom
if(allTasks.length != 0){
    allTasks.forEach((task)=>{
        addTasks(task.id, task.value);
    })
}

//Updating id according to previously stored item
var taskId;
if(allTasks.length){
    taskId = allTasks[allTasks.length-1].id + 1;
}
else taskId = 1;

//adding single tasks to dom
function addTasks(taskId, TaskName){
	//creating div for new task
  var item = document.createElement("div");
	item.setAttribute("id", taskId);
	item.style.width = "200px";
	item.style.height = "50px";
  item.style.padding = "5px";
	item.style.backgroundColor="#f4a9a8";
  item.style.margin = "4px";



  //adding description about task
	var tname = document.createElement("label");
	tname.innerHTML = TaskName;
	tname.style.marginRight = "50px";
  tname.style.marginLeft="10px";
	item.appendChild(tname);

  //add done option
	var check = document.createElement("button");
	check.setAttribute("id", "completed");
	check.innerHTML = "&#10003";
  check.style.backgroundColor="#ce97b0";
	item.appendChild(check);

	check.addEventListener("click", strikeLabel);
	function strikeLabel(event)
  {
	tname.innerHTML = TaskName.strike();

	}


  //add delete option
	var cancel = document.createElement("a");
	cancel.setAttribute("href", "#");
	cancel.innerHTML = "&#10060";
  cancel.style.textDecoration="none";
	item.appendChild(cancel);

	cancel.addEventListener("click", function(event){
        //get its id
    var targetParent = event.target.parentNode
    taskTodelete = targetParent.getAttribute('id')
    deleteFromArray(taskTodelete)
    targetParent.parentNode.removeChild(targetParent)
    item.appendChild(cancel);

	  }
	)

   document.getElementById("TasksList").appendChild(item);



}



function deleteFromArray(taskTodelete){
    for(var i = 0; i<allTasks.length; i++){
        if(allTasks[i].id == taskTodelete){
            allTasks.splice(i, 1)
            break
        }
    }
    storeTasks() //Updating local storage
}


var inp = document.getElementById("input");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(event)
									  {
									    add();
									  });
										function add(){
																			var val = inp.value;

																			if(val){ //not empty string bcoz an empty string is a false string
																					var newtask = new Object();
																					newtask.id = taskId; //bcoz we want to delete it also, so storing id also as an index
																					newtask.value = val;

																					inp.value = ""; //removing the text after adding
																					allTasks.push(newtask); //add task to array

																					storeTasks(); //add task to local storage
																						 taskId++;
																					addTaskToDom(allTasks.length-1); //add task to dom

																			}
																	}


		//Add task to Dom
		function addTaskToDom(taskNo){

	     var id = allTasks[taskNo].id;
			 var name = allTasks[taskNo].value;
		   addTasks(id, name);

		 	}



//Storing to localstorage
function storeTasks(){
    localStorage.TasksList = JSON.stringify(allTasks);
}

//Getting item from local storage
function getStoredTasks(){
    if(!localStorage.TasksList){
        localStorage.TasksList = JSON.stringify([]);
    }
    return JSON.parse(localStorage.TasksList);
}
