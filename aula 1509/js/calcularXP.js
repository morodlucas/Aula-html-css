//pegando o botão no HTML
const btnCalcular = document.querySelector('#btnCalcular');

//as funções podem ou não ter nome, no caso de baixo, ela é anônima

//function(){} ou ()=>{}

btnCalcular.addEventListener('click', function(){

    //pegar todos que possuem a class heroi - para conseguir um array

    const herois = document.querySelectorAll('.heroi');
    console.log(herois);

    //fazer um for pra percorrer o array dos herois

    for(let i = 0; i < herois.length; i++){
        let velocidade = Number(herois[i].querySelector('.velocidade').textContent);
        let agilidade = Number(herois[i].querySelector('.agilidade').textContent);
        let forca = Number(herois[i].querySelector('.forca').textContent);
        let xpFinal = (velocidade + agilidade + forca) / 3;
        herois[i].querySelector('.xp').textContent = xpFinal.toFixed(1);

        if(xpFinal < 70){
            herois[i].classList.add('bg-danger', 'text-light')
        }
    }
});