// Contenedor List
var containerList = document.createElement("div");
containerList.classList.add('containerList');


var itemList = document.createElement("div");
containerList.appendChild(itemList);
itemList.classList.add('container', 'itemList');


var tittleList = document.createTextNode("Listas ");
itemList.appendChild(tittleList);

var buttonAddList = document.createElement("button");
buttonAddList.type = 'button'; 
buttonAddList.innerText =" + "; 
itemList.appendChild(buttonAddList);
buttonAddList.classList.add('buttonAddList');

var containerNoteList = document.createElement("div");
containerList.appendChild(containerNoteList);
containerNoteList.classList.add('container', 'containerNoteList');

var itemNoteList = document.createElement("div");
containerNoteList.appendChild(itemNoteList);

// Contenedor Task
var containerTask = document.createElement("div");
containerTask.classList.add('containerTask');


var itemTask = document.createElement("div");
containerTask.appendChild(itemTask);
itemTask.classList.add('itemTask');

var contentTask = document.createElement("div");
itemTask.appendChild(contentTask);
contentTask.classList.add('container', 'contentTask');


var tittleTask = document.createTextNode("Tareas Importantes ");
contentTask.appendChild(tittleTask);

var buttonAddTask = document.createElement("button");
buttonAddTask.type = 'button'; 
buttonAddTask.innerText =" + "; 
contentTask.appendChild(buttonAddTask);
buttonAddTask.classList.add('buttonAddTask');

var containerNoteTask =document.createElement("div");
itemTask.appendChild(containerNoteTask);

var containerNewTask = document.createElement("div");
containerNoteTask.appendChild(containerNewTask);

var itemNewTask = document.createElement("div");
containerNewTask.appendChild(itemNewTask);

var app = document.getElementById("app");
app.classList.add('row', 'row-cols-1', 'row-cols-md-1', 'row-cols-lg-2', 'containerApp');
app.appendChild(containerList);
app.appendChild(containerTask);


//funciones