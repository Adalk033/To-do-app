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
document.body.onload = newList();

function newList () {

    // referencia a nuestra contenedor principal
    var itemNoteList = document.createElement("div");
    containerNoteList.appendChild(itemNoteList);
    itemNoteList.classList.add('container', 'itemNoteList');

    // creamos los 2 div en los que estara dividida la app
    var containerMainList = document.createElement('div');
    containerMainList.className = "containerMainList";

    var containerItemAddList = document.createElement('div');
    containerItemAddList.className = "content";

    // agregamos los div's como hijos de app
    itemNoteList.appendChild(containerMainList);
    itemNoteList.appendChild(containerItemAddList);
    
    // creamos la entrega la texto y el boton para guardar
    var containerBtnAddList = document.createElement('div');

    var inputAddList = document.createElement('input');
    inputAddList.type = "text";
    inputAddList.placeholder="Escribe una tarea";
    containerBtnAddList.appendChild(inputAddList);

    var buttonDoneList = document.createElement("button")
    buttonDoneList.type = 'button'; 
    buttonDoneList.innerText = "⬆"; 
    buttonDoneList.type = "button";
    buttonDoneList.classList.add('buttonDoneList');
    containerBtnAddList.appendChild(buttonDoneList);
    
   // agregamos estos elementos al div cabecera 
   containerMainList.appendChild(inputAddList);
   containerMainList.appendChild(buttonDoneList);

    // creamos la lista donde se mostraran los elemntos ingresados    
    var listList = document.createElement('ul');
    
    // agregamos la lista como hijo de content
    containerItemAddList.appendChild(listList);

    // asignamos un evento al boton de agregar
    buttonDoneList.addEventListener("click", function() {
        
        // el input debe contener informacion para poderse guardar
        if (inputAddList.value.length > 0){
            
            // creamos el elemento de lista
            var nItemList = createElementList(inputAddList.value)
            nItemList.classList.add('nItemList');
            
            // insertamos por el frente a la lista
            listList.insertBefore(nItemList,listList.firstChild)
            
            //limpiamos el valor del input
            inputAddList.value = "";

            nItemList.firstChild.firstChild.addEventListener('change', function() 
            {            
                if( this.checked)
                {
                    nItemList.firstChild.style.textDecoration = "line-through";
                }
                else
                {
                    nItemList.firstChild.style.textDecoration = "none";
                }
            });

            // asignamos un evento al boton eliminar
            nItemList.lastChild.addEventListener('click', function() 
            {    
                listList.removeChild(nItemList);
            });
        }
        
    });

}

function createElementList(val){

    // creamos la etiqueta con el texto
    var textList = document.createTextNode(val);
    var labelList = document.createElement("label");
    labelList.className = "crossText";
    labelList.style = 'text-decoration: none';

    // creamos el checkbox
    var checkList = document.createElement("input");
    checkList.type = "checkbox";
    //checkList.className = "crossText";
    checkList.style = 'text-decoration: none';

    // creamos el boton para eliminar
    var buttonDeleteList = document.createElement("button")
    buttonDeleteList.type = 'button'; 
    buttonDeleteList.innerText = "×"; 
    buttonDeleteList.type = "button";
    buttonDeleteList.classList.add('buttonDeleteList');

    // creamos el elemento de lista
    var liList = document.createElement('li');

    labelList.appendChild(checkList);
    labelList.appendChild(textList);

    // guardamos como hijos del li a las etiquetas anteriores
    liList.appendChild(labelList);
    liList.appendChild(buttonDeleteList);
    liList.style = 'list-style:none';

    return liList;
}

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
containerAddTask.classList.add('tarea');

var containerApp = document.getElementById("app");
containerApp.classList.add('row', 'row-cols-1', 'row-cols-md-1', 'row-cols-lg-2', 'containerApp');
containerApp.appendChild(containerList);
containerApp.appendChild(containerTask);

var etiquetas = [];

function addcross()
{

}


//Funciones Task

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
            var nItemTask = createElementTask(inputAddTask.value)
            nItemTask.classList.add('nItemTask');
            
            // insertamos por el frente a la lista
            listTask.insertBefore(nItemTask,listTask.firstChild)
            
            //limpiamos el valor del input
            inputAddTask.value = "";

            nItemTask.firstChild.firstChild.addEventListener('change', function() 
            {            
                if( this.checked)
                {
                    nItemTask.firstChild.style.textDecoration = "line-through";
                }
                else
                {
                    nItemTask.firstChild.style.textDecoration = "none";
                }
            });

            // asignamos un evento al boton eliminar
            nItemTask.lastChild.addEventListener('click', function() 
            {    
                listTask.removeChild(nItemTask);
            });
        }
        
    });

}

function createElementTask(val){

    // creamos la etiqueta con el texto
    var textTask = document.createTextNode(val);
    var labelTask = document.createElement("label");
    labelTask.className = "crossText";
    labelTask.style = 'text-decoration: none';

    // creamos el checkbox
    var checkTask = document.createElement("input");
    checkTask.type = "checkbox";
    //checkTask.className = "crossText";
    checkTask.style = 'text-decoration: none';

    // creamos el boton para eliminar
    var buttonDeleteTask = document.createElement("button")
    buttonDeleteTask.type = 'button'; 
    buttonDeleteTask.innerText = "×"; 
    buttonDeleteTask.type = "button";
    buttonDeleteTask.classList.add('buttonDeleteTask');

    // creamos el elemento de lista
    var liTask = document.createElement('li');

    labelTask.appendChild(checkTask);
    labelTask.appendChild(textTask);

    // guardamos como hijos del li a las etiquetas anteriores
    liTask.appendChild(labelTask);
    liTask.appendChild(buttonDeleteTask);
    liTask.style = 'list-style:none';

    return liTask;
}