var checkboxes = [];
var suma;
index = 0
var seleccion = document.body.getElementsByClassName('test')[index];

while( seleccion != undefined)
{
    seleccion = document.body.getElementsByClassName('test')[index];
    checkboxes.push(seleccion);
    index++;   
}

function eliminar()
{
    if(this.checked)
    {
        alert('Check seleccionado')
    }
    document.body.label.style = "text-decoration: line-through;";
}

console.log("Antes de funcion");
seleccion = null;

for(var two = 0; two < checkboxes.length - 1; two++)
{
    checkboxes[two].addEventListener("change", eliminar)    
}

console.log("FIN");