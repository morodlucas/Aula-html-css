
//pegando por id

const getId1 = document.getElementById('heroi');
console.log(getId1);

const getId2 = document.querySelector('#heroiTres');
console.log(getId2);

const getClass1 = document.getElementsByClassName('heroi');
console.log(getClass1);
console.log(getClass1[3]);

const getClass2 = document.querySelectorAll('.nome');
console.log(getClass2);
console.log(getClass2[3]);
console.log(getClass2[3].textContent);
getClass2[3].textContent = 'abcd';
console.log(getClass2[3].innerHTML);

//pegar pela tag
const getTag1 = document.getElementsByTagName('th');
console.log(getTag1);

const getTag2 = document.getElementsByTagName('td');