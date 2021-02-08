// Contenedor List
var containerList = document.createElement("div");
containerList.classList.add('containerList');


var itemList = document.createElement("div");
containerList.appendChild(itemList);
itemList.classList.add('container', 'itemList');


var tittleList = document.createTextNode("Lista de Pendientes");
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

//Funciones List

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
itemTask.appendChild( containerNoteTask);

var containerAddTask =document.createElement("div");
containerNoteTask.appendChild(containerAddTask);

var app = document.getElementById("app");
app.classList.add('row', 'row-cols-1', 'row-cols-md-1', 'row-cols-lg-2', 'containerApp');
app.appendChild(containerList);
app.appendChild(containerTask);


//funciones Task

document.body.onload = newTask();

function newTask () {

    // referencia a nuestra contenedor principal
    var containerNewTask = document.createElement("div");
    containerAddTask.appendChild(containerNewTask);
    containerAddTask.classList.add('container', 'containerAddTask');

    // creamos los 2 div en los que estara dividida la app
    var containerMainTask = document.createElement('div');
    containerMainTask.className = "containerMainTask";

    var containerItemAddTask = document.createElement('div');
    containerItemAddTask.className = "content";

    // agregamos los div's como hijos de app
    containerNewTask.appendChild(containerMainTask);
    containerNewTask.appendChild(containerItemAddTask);
    
    // creamos la entrega la texto y el boton para guardar
    var containerBtnAddTask = document.createElement('div');

    var inputAddTask = document.createElement('input');
    inputAddTask.type = "text";
    inputAddTask.placeholder="Escribe una tarea";
    containerBtnAddTask.appendChild(inputAddTask);

    var buttonDoneTask = document.createElement("button")
    buttonDoneTask.type = 'button'; 
    buttonDoneTask.innerText = "⬆"; 
    buttonDoneTask.type = "button";
    buttonDoneTask.classList.add('buttonDoneTask');
    containerBtnAddTask.appendChild(buttonDoneTask);
    

   // agregamos estos elementos al div cabecera 
   containerMainTask.appendChild(inputAddTask);
   containerMainTask.appendChild(buttonDoneTask);

    
    // creamos la lista donde se mostraran los elemntos ingresados    
    var listTask = document.createElement('ul');
    
    // agregamos la lista como hijo de content
    containerItemAddTask.appendChild(listTask);

    // asignamos un evento al boton de agregar
    buttonDoneTask.addEventListener("click", function() {
        
        // el input debe contener informacion para poderse guardar
        if (inputAddTask.value.length > 0){
            
            // creamos el elemento de lista
            var nElementoTask = createElementTask(inputAddTask.value)
            
            // insertamos por el frente a la lista
            listTask.insertBefore(nElementoTask,listTask.firstChild)
            
            //limpiamos el valor del input
            inputAddTask.value = "";

            // asignamos un evento al checkbox para marcar el texto
            nElementoTask.firstChild.addEventListener('change', function() 
            {            
                if( this.checked)
                {
                    nElementoTask.style = 'text-decoration: line-through; list-style:none';
                }
                else
                {
                    nElementoTask.style = 'text-decoration: none; list-style:none';
                }
            });

            // asignamos un evento al boton eliminar
            nElementoTask.lastChild.addEventListener('click', function() 
            {            
                listTask.removeChild(nElementoTask);
            });
            

        }
      });

}

function createElementTask(val){
    // creamos el checkbox
    var checkTask = document.createElement("input");
    checkTask.type = "checkbox";

    // creamos la etiqueta con el texto
    var textTask = document.createTextNode(val);
    var labelTask = document.createElement("label");
    labelTask.appendChild(textTask);

    // creamos el boton para eliminar
    var buttonDeleteTask = document.createElement("button")
    buttonDeleteTask.type = 'button'; 
    buttonDeleteTask.innerText = "×"; 
    buttonDeleteTask.type = "button";
    buttonDeleteTask.classList.add('buttonDeleteTask');

    // creamos el elemento de lista
    var liTask = document.createElement('li');

    // guardamos como hijos del li a las etiquetas anteriores
    liTask.appendChild(checkTask);
    liTask.appendChild(labelTask);
    liTask.appendChild(buttonDeleteTask);
    liTask.style = 'list-style:none';

    return liTask;
}
