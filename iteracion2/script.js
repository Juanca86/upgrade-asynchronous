// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    const resultado = async () => {  
        const respuesta = await promise.then(() => {console.log('Time out!')})}
        const res =  respuesta.json()
        console.log(res);
};

runTimeOut();

// const buscar = async () => {
//     try {
//         const post = await runTimeOut()
//     console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// }
// buscar()

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
const getCharacters = async () => {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character')
    const res = await respuesta.json()
    console.log(res);
}

getCharacters();
