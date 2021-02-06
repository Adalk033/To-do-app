console.log("Inicio");

var etiquetas = [];

index = 0;
var estilo = document.body.getElementsByClassName('tarea')[index];

while( estilo != undefined)
{
    estilo = document.body.getElementsByClassName('tarea')[index];

    etiquetas.push(estilo)

    index++;   

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