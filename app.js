// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista donde se almacenaran los nombres

let listaDeNombres = [];

//función para agregar amigos y cambiar el "h2" temporalmente

function agregarNombres() {
    let nombre = document.getElementById("amigo").value;
    let titulo = document.getElementById("encabezado2");
    let textoOriginalh2 = "Digite el nombre de sus amigos"

    if (nombre === "") {
        //cambia el "h2"
        titulo.innerText = "Por favor ingrese un nombre correctamente"
        //establece el tiempo de retorno
        setTimeout(() => {
            titulo.innerText = textoOriginalh2;
        }, 2000);
        return;
    } else {
        //agregamos el nombre a la lista y limpiamos el campo
    listaDeNombres.push(nombre)
    document.getElementById("amigo").value="";
    }
}