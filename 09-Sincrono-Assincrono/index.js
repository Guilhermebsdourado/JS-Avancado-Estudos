function colocarAguaPraFerver(){
    console.log('colocar água pra ferver')

    setTimeout(() => {
        console.log('água fervou')
        passarOCafé()
    }, 5000);
}

function prepararPraPassarOCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafé(){
    console.log('passando o café')
}

colocarAguaPraFerver()
prepararPraPassarOCafe()
