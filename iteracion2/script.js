// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console
//  usando async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
                setTimeout(function () {
                    resolve();
                }, 2000);
            })
        await promise 
        console.log('Time out!');
}
runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
const getCharacters = async () => {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character')
    const res = await respuesta.json()
    console.log(res);
}
getCharacters();
