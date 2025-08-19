let pessoas = [
    { nome: 'Roberto', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'Rafhael', idade: 27}
]

// let pessoasComIdade33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasComIdade33Anos.push(pessoas[i])
//     }
// } 

// let pessoasComIdade33Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 33
// });

let pessoasComIdade33Anos = pessoas.filter((pessoa) => pessoa.idade === 33);

console.log(pessoasComIdade33Anos);
