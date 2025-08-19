// setTimeout(() => {
//     alert('Olá mundo!')
// }, 3000);

// setInterval(() => {
//     console.log('cosole dentro do setTimeout')
// }, 4000);

// console.log('console depois do setTimeout')

let idDoIntervalo = setInterval(() => {
                    cosole.log('Executando a cada 2 segundos')
                }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()