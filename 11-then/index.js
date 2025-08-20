// let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
//     return new Promise((resolve, reject) =>{
//         if (chaleiraEstaNoFogao && fogaoEstaLigado){
//             console.log('começando o processo de ferver água');
//             resolve()
//         }else{
//             console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
//             reject()
//         }
//     })
// }

// let chaleiraEstaNoFogao = true
// let fogaoEstaLigado = true

// let passarCafe = () => console.log('passando café')

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
// console.log('fazendo café');

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passarOCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log('Finalizado ritual do café, bora trabalhar');
    });