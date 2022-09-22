//pegando o botão
const btnCalcular = document.querySelector('#btnCalcular')
console.log(btnCalcular);

// *fica escutando os eventos. Quando clicar no btn, chama a função*
btnCalcular.addEventListener('click', mensagem1);
btnCalcular.addEventListener('mouseover', mensagem2);


function mensagem1(){
    alert('Eu sou uma função');
}

function mensagem2(){
    alert('O mouse passou por mim');
}