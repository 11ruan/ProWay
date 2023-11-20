/*
const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    const input = document.querySelector('#nome');

    console.log('Nome capturado :' + ' ' + input.value)
})
*/


const btn = document.querySelector('#btn');

btn.addEventListener('click', capturarNome);

function capturarNome(){
    const input = document.querySelector('#nome');

    console.log('Nome capturado :' + ' ' + input.value);
};
