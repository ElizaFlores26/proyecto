let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');

btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);

let i = 5;

function agregar(){

    if(i<10){
        let Libro = prompt("Libro:");
        let Autor = prompt("Autor:");
        let calificacion = prompt("Calificacion:");
        let imagen = prompt("URL de portada:");
   
        let columna = document.createElement('tr');
        let numTop = document.createElement('td')
        numTop.innerHTML = ++i;
        let nomLibro = document.createElement('td');
        nomLibro.innerHTML = Libro;
        let autor = document.createElement('td');
        autor.innerHTML = Autor;
        let calif = document.createElement('td');
        calif.innerHTML = calificacion;

        columna.appendChild(numTop);
        columna.appendChild(nomLibro);
        columna.appendChild(autor);
        columna.appendChild(calif);

        let tabla = document.getElementById('tabla').appendChild(columna);
        (i%2==0)?tabla.className = 'par':tabla.className = 'impar'

        switch(i){
            case 6:
                let img6 = document.getElementById("imagenCambia");
                let titulo6 = document.querySelector('h3')
                tabla.addEventListener("mouseover",function(){img6.src = imagen; titulo6.innerHTML = Libro});
                break;
            case 7:
                let img7 = document.getElementById("imagenCambia");
                let titulo7 = document.querySelector('h3');
                tabla.addEventListener("mouseover",function(){ img7.src = imagen; titulo7.innerText = Libro});
                break;
            case 8:
                let img8 = document.getElementById("imagenCambia");
                let titulo8 = document.querySelector('h3')
                tabla.addEventListener("mouseover",function(){img8.src = imagen; titulo8.innerText = Libro});
                break;    
            case 9:
                let img9 = document.getElementById("imagenCambia");
                let titulo9 = document.querySelector('h3')
                tabla.addEventListener("mouseover",function(){ img9.src = imagen; titulo9.innerText = Libro})
                break;  
            case 10:
                let img10 = document.getElementById("imagenCambia");
                let titulo10 = document.querySelector('h3')
                tabla.addEventListener("mouseover",function(){img10.src = imagen; titulo10.innerText = Libro;});    
                break;            
        }        
        
    }else{
        alert("Solamente puede agregar 10 elementos");
    } 
}



function eliminar(){

    if(i==5){
        alert("No hay elementos que eliminar")
    }else{
    tabla = document.getElementById('tabla');

    let ultimo = tabla.lastChild;
    tabla.removeChild(ultimo);
    i = --i;
    }
}
