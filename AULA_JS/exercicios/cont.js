const btn = document.querySelector('#btn');
const inpt = document.querySelector('#inpt');
const res = document.querySelector('#res');

btn.addEventListener('click', ()=>{
    cont();
});

function cont(){
    let inptValue = parseInt(inpt.value);
    let cont = 0;
    res.innerHTML = '';

    do{
        res.innerHTML += `<p> ${cont} </p> <br/>`;

        cont++;
    }while (cont <= inptValue);
};