const btn = document.querySelector('#btn');
const inpt = document.querySelector('#num');
const res = document.querySelector('#res');

btn.addEventListener('click', ()=>{
    mostrarMes();
});

function mostrarMes(){
    let inptValue = parseInt(inpt.value);
    
    switch (inptValue){
        case 2:
            res.innerHTML = 'Fevereiro';
            break;
        case 7:
            res.innerHTML = 'Julho';
            break;
        case 11:
            res.innerHTML = 'Novembro';
            break;
        default:
            res.innerHTML = 'Mês inválido';
            break;
    };
};
