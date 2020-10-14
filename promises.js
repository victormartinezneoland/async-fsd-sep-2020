
// Sintax 1
// console.log('Iniciando proceso de subida');

// const photoUpload = () => {
//     return new Promise((resolve, reject) => {
//         if(true) {
//             const serverResponse = {
//                 status: 200,
//                 message: 'Todo guay'
//             };
//             setTimeout(() => {
//                 resolve(serverResponse);
//             }, 3000);
//         } else {
//             const serverResponse = {
//                 status: 404,
//                 message: 'URL not found'
//             };
//            reject(serverResponse); 
//         }
//     });
// };

// photoUpload()
//     .then(response => {
//         console.log(response);
//         return response.message.toUpperCase();
//     })
//     .then(response => console.log('Este es mi segundo .then', response))
//     .catch(error => console.log('Se ha producido un error', error));



// Sintax 2

// console.log('Iniciando proceso de subida');

// const photoUpload = new Promise((resolve, reject) => {
//     if(true) {
//         const serverResponse = {
//             status: 200,
//             message: 'Todo guay'
//         };
//         setTimeout(() => {
//             resolve(serverResponse);
//         }, 3000);
//     } else {
//         const serverResponse = {
//             status: 404,
//             message: 'URL not found'
//         };
//        reject(serverResponse); 
//     }
// });

// photoUpload
//     .then(response => {
//         console.log(response);
//         return response.message.toUpperCase();
//     })
//     .then(response => console.log('Este es mi segundo .then', response))
//     .catch(error => console.log('Se ha producido un error', error));


// Sintax 3

// console.log('Iniciando proceso de subida');

// function photoUpload() {
//     return new Promise((resolve, reject) => {
//         if(false) {
//             const serverResponse = {
//                 status: 200,
//                 message: 'Todo guay'
//             };
//             setTimeout(() => {
//                 resolve(serverResponse);
//             }, 3000);
//         } else {
//             const serverResponse = {
//                 status: 404,
//                 message: 'URL not found'
//             };
//            reject(serverResponse); 
//         }
//     });
// }


// photoUpload()
//     .then(response => {
//         console.log(response);
//         return response.message.toUpperCase();
//     })
//     .then(response => console.log('Este es mi segundo .then', response))
//     .catch(error => console.log('Se ha producido un error', error))
//     .finally(() => console.log('Se ha ejecutado el FINALLY'))




// Promise.all

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => {
                resolve('Hello!');
            }, 1000);
        } else {
           reject('Ouch primera!!'); 
        }
    });
};

const goodbyePromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('Goodbye!');
            }, 1000);
        } else {
           reject('Ouch segunda!!'); 
        }
    });
};

Promise.all([helloPromise(), goodbyePromise()])
    .then(response => console.log('Respuesta es:', response))
    .catch(error => console.log('Se ha producido un error', error))

    

// Promise.race

Promise.race([helloPromise(), goodbyePromise()])
    .then(response => {
        console.log('La respuesta más rápida es', response);
    })
    .catch(error => console.log('Error:', error))



// Promesa en la que hago una petición HTTP

const cityFromDom = 'Madrid';

const getWeatherData = (city) => {
    return new Promise((resolve, reject) => {
        const apiKey = '6bdf06d68edc907bb1bed5e1cfa70637';

        let weatherRequest = new XMLHttpRequest();

        weatherRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setTimeout(() => weatherRequest.send(), 3000);

        weatherRequest.onload = function() {
            if(weatherRequest.status !== 200) {
                // console.log(`Ha ocurrido un error con codigo ${weatherRequest.status} y mensaje ${weatherRequest.statusText}`);
                reject(`${weatherRequest.status} - ${weatherRequest.statusText}`);
            } else {
                const parsedResponse = JSON.parse(weatherRequest.response);
                // console.log('RESPUESTA PARSEADA', parsedResponse);
                resolve(parsedResponse);
            }
        };
    });
};

getWeatherData(cityFromDom)
    .then(response => console.log('RESPONSE IS', response))
    .catch(error => console.log(error));

