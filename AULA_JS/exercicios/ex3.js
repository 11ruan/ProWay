const btn = document.querySelector('#btn');

function validaMes(){
    const input = document.querySelector('#mes');

    switch (input.value){
        case 1:
            console.log('Fevereiro');
            break;
        case 7:
            console.log('Julho');
            break;
        case 11:
            console.log('Novembro');
            break;
        default:
            console.log('Més inválido');
            break;
    };
};

btn.addEventListener('click', validaMes);