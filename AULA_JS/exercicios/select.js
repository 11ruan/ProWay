const btn = document.querySelector('#btn');
const select = document.querySelector('#meses');
const res = document.querySelector('#res');

btn.addEventListener('click', mostrarMes);

function mostrarMes(){
    let opt = parseInt(select.value);

    switch(opt){
        case 1:
            res.innerHTML = 'Janeiro';
            break;
        case 2:
            res.innerHTML = 'Fevereiro';
            break;
        case 3:
            res.innerHTML = 'Março';
            break;
        case 4:
            res.innerHTML = 'Abril';
            break;
        case 5:
            res.innerHTML = 'Maio';
            break;
        case 6:
            res.innerHTML = 'Junho';
            break;
        case 7:
            res.innerHTML = 'Julho';
            break;
        case 8:
            res.innerHTML = 'Agosto';
            break;
        case 9:
            res.innerHTML = 'Setembro';
            break;
        case 10:
            res.innerHTML = 'Outubro';
            break;
        case 11:
            res.innerHTML = 'Novembro';
            break;
        case 12:
            res.innerHTML = 'Dezembro';
            break;
        default:
            res.innerHTML = 'Mês inválido';
            break;
    }   
};