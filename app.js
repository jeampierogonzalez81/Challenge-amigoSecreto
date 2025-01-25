//Definición de de arreglo vacio como una variable
let listaAmigos = [];

function agregarAmigo () {
    //Se almacena el valor del input en esta constante
    const amigo = document.getElementById('amigo').value
    //Se usa condicional para evitar que el campo este vacio
    if(amigo !== "") {
        listaAmigos.push(amigo);
        console.log(listaAmigos)
         
        //esto renderiza cadauno de los nombres de amigos ingresados  
        const resultado = document.getElementById('listaAmigos');
        resultado.innerHTML += `<li>${amigo}</li>`;
        //aqui se blanquea el campo del input
        document.getElementById('amigo').value = "";
    
    //En caso de estar vacio se envia mensaje
    } else {
        alert('Ingrese un nombre, el campo no puede estar vacio');
    }
    //se manipula el DOM para posicionar el cursor en el input una vez ingresado un nombre 
    document.getElementById('amigo').focus(); 
    
}

function sortearAmigo() {
    //Se crea variable que usa el arreglo y efectua la seleccion aleatoria de sus registros
    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    //Se blanque el elemento donde se habia renderizado todos los nombres que se habian ingresado previamente
    document.getElementById('listaAmigos').innerHTML = " ";
    //Se renderiza el valor de la varible que previamente hizo la seleccion aleatoria
    const muestraAmigoSecreto = document.getElementById('resultado').innerHTML =`<li>${amigoSecreto}</li>`;
}
