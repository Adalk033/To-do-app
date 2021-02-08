document.body.onload = containerApp();

function containerApp () {

    // referencia a nuestra contenedor principal
    var app = document.getElementById("app");
    
    // creamos los 2 div en los que estara dividida la app
    var divMain = document.createElement('div');
    divMain.className = "main";

    var divContent = document.createElement('div');
    divContent.className = "content";

    // agregamos los div's como hijos de app
    app.appendChild(divMain);
    app.appendChild(divContent);
    
    // creamos la entrega la texto y el boton para guardar
    var inputAgregar = document.createElement('input');
    inputAgregar.type = "text"

    var botonAgregar = document.createElement('input');
    botonAgregar.type = "button"
    botonAgregar.value = "agregar"

   // agregamos estos elementos al div cabecera 
    divMain.appendChild(inputAgregar);
    divMain.appendChild(botonAgregar);

    
    // creamos la lista donde se mostraran los elemntos ingresados    
    var list = document.createElement('ul');
    
    // agregamos la lista como hijo de content
    divContent.appendChild(list);

    // asignamos un evento al boton de agregar
    botonAgregar.addEventListener("click", function() {
        
        // el input debe contener informacion para poderse guardar
        if (inputAgregar.value.length > 0){
            
            // creamos el elemento de lista
            var nElemento = crearElemento(inputAgregar.value)
            
            // insertamos por el frente a la lista
            list.insertBefore(nElemento,list.firstChild)
            
            //limpiamos el valor del input
            inputAgregar.value = "";

            // asignamos un evento al checkbox para marcar el texto
            nElemento.firstChild.addEventListener('change', function() 
            {            
                if( this.checked)
                {
                    nElemento.style = 'text-decoration: line-through; list-style:none';
                }
                else
                {
                    nElemento.style = 'text-decoration: none; list-style:none';
                }
            });

            // asignamos un evento al boton eliminar
            nElemento.lastChild.addEventListener('click', function() 
            {            
                list.removeChild(nElemento);
            });
            

        }
      });

}

function crearElemento(val){
    // creamos el checkbox
    var check = document.createElement("input");
    check.type = "checkbox";

    // creamos la etiqueta con el texto
    var text = document.createTextNode(val);
    var label = document.createElement("label");
    label.appendChild(text);

    // creamos el boton para eliminar
    var eButon = document.createElement('input');
    eButon.type = "button";
    eButon.value = "eliminar";

    // creamos el elemento de lista
    var li = document.createElement('li');

    // guardamos como hijos del li a las etiquetas anteriores
    li.appendChild(check);
    li.appendChild(label);
    li.appendChild(eButon);
    li.style = 'list-style:none';

    return li;
}