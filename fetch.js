
// Cómo hacer un fetch
const getRandomUser = async () => {
    const myRandomUser = await fetch('https://randomuser.me/api/?results=1');
    // Llamamos al método .json() de lo que nos devuelve el fetch para hacer
    // la respuesta accesible y poder manejarla desde JS
    const userData = await myRandomUser.json();
    
    console.log('Mi usuario es', userData);
};
getRandomUser();

// // Otras opciones de funciones asíncronas
// async function prueba() {

// }
// prueba();


// const myAnonymousFunction = async function() {

// };
// myAnonymousFunction();