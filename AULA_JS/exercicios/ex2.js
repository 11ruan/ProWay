const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    const inputValor = document.querySelector('#hora').value;

    console.log(inputValor);

    if(inputValor >= 6 && inputValor < 14){
        console.log('Primeiro Turno');
    } else if(inputValor >= 14 && inputValor < 22){
        console.log('Segundo Turno');
    } else {
        console.log('Turno não determinado');
    };
});