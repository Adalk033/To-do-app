var content = document.getElementById('app');
var newDiv = document.createElement('div');

var h2 = document.createElement('h2');
var title = document.createTextNode('To do App');
h2.appendChild(title);
newDiv.appendChild(h2);

var btnNewElemnt = document.createElement('button');
btnNewElemnt.className = 'newElement';
btnNewElemnt.id = 'newElemnt1';
var textValueNew = document.createTextNode('Nuevo Elemento');
btnNewElemnt.appendChild(textValueNew);
newDiv.appendChild(btnNewElemnt);

var btnDeleteElemnt = document.createElement('button');
btnDeleteElemnt.className = 'deleteElement'
btnDeleteElemnt.id = 'idDeleteElement'
var textValueDelete = document.createTextNode('Eliminar Elemento');
btnDeleteElemnt.appendChild(textValueDelete);
newDiv.appendChild(btnDeleteElemnt);

var ul = document.createElement('ul');
	ul.className = "elemento";
	ul.id = "idElementoUl";
newDiv.appendChild(ul);
content.appendChild(newDiv);
//----------------------CREACION DE MODEL------------------------

var modal = document.createElement('div');
modal.id = "modal";
//var span = document.createElement('span');
//var textSpan = document.createTextNode('&times');
//span.className = "close";
var mdcontent = document.createElement('div');
mdcontent.id = "mdcontent";
var h2 = document.createElement('h2');
var titleModal = document.createTextNode('Nuevo Elemento');
h2.appendChild(titleModal);

var inputText = document.createElement('input');
inputText.placeholder = '  Ingresa la nueva tarea';
inputText.className = 'clsInputText';
inputText.id = 'idInputText';
var btnAceptar = document.createElement('button');
btnAceptar.className = "newElement";
btnAceptar.id = "idNewElement";
var textAceptar = document.createTextNode('Aceptar');
btnAceptar.appendChild(textAceptar);

//modal.appendChild(span);
mdcontent.appendChild(h2);
mdcontent.appendChild(inputText);
mdcontent.appendChild(btnAceptar);
modal.appendChild(mdcontent);
content.appendChild(modal);
//_-------------------------------------------------------
var btnCrearElemento = document.getElementById('newElemnt1');
var verModal = document.getElementById('modal');

btnCrearElemento.addEventListener("click",function()
{
	verModal.style = "display: block;";
});
//---------------------------------------------------------
var btnCrearElemento = document.getElementById('idNewElement');
function crearNodo(){
	var descrip = document.getElementById('idInputText').value;
	
	//ul.style.background = "red";

	var li = document.createElement('li');
	var nodo = document.createElement('input');
	nodo.type = "checkbox";
	nodo.id = "idSubElemento";
		nodo.name = "nameSubElemento";
	
	nodo.className = "idSubElemento1";
	li.id = "idElemento";
	li.className = "subElemento";

	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";
	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	li.style.background = color;
	var descripcion = document.createTextNode(descrip);
	li.appendChild(nodo);
	li.appendChild(descripcion);
    ul.appendChild(li);
	//newDiv.appendChild(ul);
	
	var verModa2 = document.getElementById('modal');
	verModa2.style.display = "none";
}
btnCrearElemento.addEventListener("click",crearNodo);

var btnDeleteElemento = document.getElementById('idDeleteElement');
function eliminarNodo(){
    var elemento = document.getElementsByName('nameSubElemento'); 
    for (i=0; i<elemento.length; i++) // 
    {
        if (elemento[i].checked) 
        {
	        ul = document.getElementsByTagName('ul')[0];
	        li = ul.getElementsByTagName('li');
	        ul.removeChild(li[i]);
        } 
    }
}

btnDeleteElemento.addEventListener("click",eliminarNodo);