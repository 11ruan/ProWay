const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    const INPUTVALOR = document.querySelector('#idade').value;
    console.log('Dado capturado :' + ' ' + INPUTVALOR);

    const RES = document.querySelector('#divRes p');

    if(INPUTVALOR >= 18) {
        RES.classList.add('maior');
        RES.classList.remove('menor');
        RES.innerHTML = 'Maior de idade';
    } else {
        RES.classList.add('menor');
        RES.classList.remove('maior');
        RES.innerHTML = 'Menor de idade';
    };
});