const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

// let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João', 'Paulo']

// pessoas1 = [ ...pessoas1, ...pessoas2 ]
// console.log(pessoas1);

const pessoa1 = {nome: 'Roberto', idade: 33 }

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado);
