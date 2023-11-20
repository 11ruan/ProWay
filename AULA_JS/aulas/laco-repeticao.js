const inpt = document.querySelector('#inpt');
const btn = document.querySelector('#btn');
const res = document.querySelector('#res');

btn.addEventListener('click', () => {
    contador();
});

function contador(){
    let inptValue = parseInt(inpt.value);

    for(let i=0;i<inptValue;i++){
        res.innerHTML += `<p> ${i+1} <br/> </p>`;
    };
}