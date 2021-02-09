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
containerAddTask.classList.add('tarea');

var containerApp = document.getElementById("app");
containerApp.classList.add('row', 'row-cols-1', 'row-cols-md-1', 'row-cols-lg-2', 'containerApp');
containerApp.appendChild(containerList);
containerApp.appendChild(containerTask);

var etiquetas = [];

function addcross()
{

}

function checarTexto()
    {
        //arreglo para las etiquetas
        
        index = 0;
        
        etiquetas = [];
        
        var estilo = document.body.getElementsByClassName('crossText')[index];

        //sirve para encontrar las etiquetas en la pagina
        while( estilo != undefined )
        {
            estilo = document.body.getElementsByClassName('crossText')[index];

            etiquetas.push(estilo)

            index++;   

            estilo = document.body.getElementsByClassName('crossText')[index];
        }

        //Este for le agrega a cada etiqueta un lsineer por si son marcado para tachar el texto o no
        for(var two = 0; two < etiquetas.length; two++)
        {
            etiquetas[two].addEventListener('change', function() 
                {            
                    if( this.style.textDecoration === 'none' )
                    {
                        this.style = 'text-decoration: line-through';
                    }
                    else
                    {
                        this.style = 'text-decoration: none';
                    }
                } );
        }
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

            checarTexto();

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

