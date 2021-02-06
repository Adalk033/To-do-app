console.log("Inicio");

var checkboxes = [];
var etiquetas = [];

index = 0;
var seleccion = document.body.getElementsByClassName('test')[index];
var estilo = document.body.getElementsByClassName('tarea')[index];

while( seleccion != undefined)
{
    seleccion = document.body.getElementsByClassName('test')[index];
    estilo = document.body.getElementsByClassName('tarea')[index];

    etiquetas.push(estilo)
    checkboxes.push(seleccion);

    index++;   

    seleccion = document.body.getElementsByClassName('test')[index];
    estilo = document.body.getElementsByClassName('tarea')[index];
}

for(var two = 0; two < etiquetas.length; two++)
{
    etiquetas[two].addEventListener('click', function() 
        {            
            if( this.style.textDecoration === 'none')
            {
                this.style = 'text-decoration: line-through';
            }
            else
            {
                this.style = 'text-decoration: none';
            }
        } );
}

console.log("FIN");