//Variavies contendo os elementos
//Botao de mais e menos e o input para mostrar o valor
const btnMais = document.querySelector('#mais');
const btnMenos = document.querySelector('#menos');
const contadorInput = document.querySelector('#num');


//Dois 'escutadores', um em cada botao(para adicionar e subtrair)
btnMais.addEventListener('click', ()=>{
    //Chamando a funcao de subtrair dentro do escutador
    //do botao de menos
    incrementarValor();
});

btnMenos.addEventListener('click', ()=>{
    //Chamando a funcao de adicionar dentro do escutador
    //do botao de mais
    subtrairValor();
});

//Funções para adicionar e subtrair o valor
function incrementarValor(){
    //Pegando o valor do input, passando ele para numero pois
    //ele está como uma string dentro do input, e adicionando
    //mais 1 cada vez que aperta o botao
    contadorInput.value = parseInt(contadorInput.value) + 1;
};

function subtrairValor(){
    //Mesma coisa que o de cima
    const valorAtual = parseInt(contadorInput.value);

    //if para não ter numeros negativos
    if(valorAtual > 0){
        contadorInput.value = valorAtual-1;
    };
};

