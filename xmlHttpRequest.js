

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu');
xhr.send();
// GET --> Obtener información
// POST --> Publicar o enviar información


xhr.onload = function() {
    if(xhr.status !== 200) {
        console.log(`Ha ocurrido un error con codigo ${xhr.status} y mensaje ${xhr.statusText}`);
    } else {
        // console.log('RESPUESTA', xhr.response);
        const parsedResponse = JSON.parse(xhr.response);
        console.log('RESPUESTA PARSEADA', parsedResponse);
        console.log('El nombre del personaje es', parsedResponse.name);
        
    }
};