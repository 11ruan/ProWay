const btn = document.querySelector('#btn');
const inpt = document.querySelector('#inpt');
const res = document.querySelector('#res');

btn.addEventListener('click', ()=>{
    tabuada();
});

function tabuada(){
    let inptValue = parseInt(inpt.value);
    res.innerHTML = '';

    for(let i=0;i<=10;i++){
        let resultado = i*inptValue;
        res.innerHTML += `
            <p> 
                ${i} x ${inptValue} = ${resultado} <br/> 
            </p>
        `;
    };
};