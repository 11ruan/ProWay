const btn = document.querySelector('#btn');
const inpt = document.querySelector('#inpt');
const res = document.querySelector('#res');

btn.addEventListener('click', ()=>{
    abobra();
});

function abobra(){
    let inptValor = parseInt(inpt.value);
    let cont = 0;
    res.innerHTML = '';

    while(cont <= inptValor){
        if(cont % 2 === 0){
            res.innerHTML += `<p> ${cont} é par </p> <br/>`;
        } else {
            res.innerHTML += `<p> ${cont} é ímpar </p> <br/>`;
        };

        cont++;
    };
};