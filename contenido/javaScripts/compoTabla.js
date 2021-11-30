
let fila1 =  document.getElementById("fila1");
let imagen = document.getElementById("imagenCambia");
let titulo = document.querySelector('h3')
fila1.addEventListener('mouseover',function(){titulo.innerHTML = 'Persona normal';imagen.src = 'contenido/img/personaNormal.png'});

let fila2 =  document.getElementById("fila2");
let imagen2 = document.getElementById("imagenCambia");
let titulo2 = document.querySelector('h3')
fila2.addEventListener('mouseover',function(){imagen2.src = 'contenido/img/violet.png',titulo2.innerHTML = 'Violet y finch'});


let fila3 =  document.getElementById("fila3");
let imagen3 = document.getElementById("imagenCambia");
let titulo3 = document.querySelector('h3')   
fila3.addEventListener('mouseover',function(){imagen3.src = 'contenido/img/despues.jpg', titulo3.innerHTML = 'Despues'});


let fila4 =  document.getElementById("fila4");
let imagen4 = document.getElementById("imagenCambia");
let titulo4 = document.querySelector('h3')
fila4.addEventListener('mouseover',function(){imagen4.src = 'contenido/img/delirium.jpg';titulo4.innerHTML = 'Delirium'});

let fila5 =  document.getElementById("fila5");
let imagen5 = document.getElementById("imagenCambia");
let titulo5 = document.querySelector('h3')
fila5.addEventListener('mouseover',function(){titulo5.innerHTML = 'Orgullo y prejuicio';imagen5.src = 'contenido/img/orgullo.jpg'});
