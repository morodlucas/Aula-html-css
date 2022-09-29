calcular1(10,99);
calcular1(10,99);
calcular1(10,99);       

function calcular1(n1,n2){
    let resultado = n1 + n2;
    document.querySelector('#exemplo1').textContent += `${resultado} `;
}

//exemplo 2
//Math.random() sorteira um número entre 0 e 1
const firstNumber = parseInt(Math.random()*100); 
const secondNumber = parseInt(Math.random()*100);
console.log(firstNumber, secondNumber);

function calcular2(fn, sn){
    //let resultado = fn * sn;
    //return resultado;
    return fn * sn;
}

const resultado = calcular2(firstNumber, secondNumber);
document.querySelector('#exemplo2').textContent = resultado;

//exemplo 3 - array
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
document.querySelector('#array1').textContent = pessoas;

//inserindo no fim do array
pessoas.push('huehuehu');
document.querySelector('#array2').textContent = pessoas;

//excluir o último índice (vai perder o índice)

const pessoasExcluidas = [];
pessoasExcluidas.push(pessoas.pop());

pessoas.pop();
document.querySelector('#array3').textContent = pessoasExcluidas;

//inserir no início do array
pessoas.unshift('kaskaskasksa');
document.querySelector('#array4').textContent = pessoas;

//excluir o primeiro índice
pessoasExcluidas.push(pessoas.shift());
document.querySelector('#array5').textContent = pessoasExcluidas;

//excluir em qualquer parte do array
// pessoas.splice(2,2) -> (qual o índice que vai começar excluir, quantos vai);
pessoas.splice(2,2);
document.querySelector('#array6').textContent = pessoas;

//inserir em qualquer parte do array
pessoas.splice(2,0,'Ele', 'Nós', 456, 789, 'abc', ...pessoasExcluidas);
document.querySelector('#array7').textContent = pessoas;

//para cada elemento do array, criar um <p></p> e exibir na div
//usando o forEach() - executa uma função para cada elemento do array
pessoas.forEach(pessoa => {
   
    //criar a tag de parágrafo
    const paragrafo = document.createElement('p');
    //colocar o nome da pessoa como texto do parágrafo
    paragrafo.textContent = pessoa;

    //inserindo classe CSS no parágrafo
    paragrafo.classList.add('bg-danger', 'text-light')

    //vincular o parágrafo criado na div
    document.querySelector('#array8').appendChild(paragrafo)
});