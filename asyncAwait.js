// async --> Declarar una función asíncrona
// await --> Indicar, dentro de la función asíncrona, que espere al
//      resultado de una promesa u operación asíncrona

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => resolve('Hola'), 3000);
        } else {
            reject('No hay saludo');
        }
    });
};

// Forma tradicional
helloPromise()
    .then(response => {
        return response;
    })
    .then()
    .then()
    .catch()
    .finally(() => console.log('Esto siempre'));


// Con async await
const saludar = async () => {
    try {
        // Muestra icono cargando
        const resultadoDelSaludo = await helloPromise();
        // Oculta icono cargando
        console.log('Esto siempre');

        console.log(resultadoDelSaludo);  
    } catch (error) {
        console.log(error);
    }  
};

saludar();
console.log('Heyy Luis');