//Variavel contendo o botao de enviar
const btn = document.querySelector('#btn');

//Variaveis com os dados do usuario
let usuario = 'mateuszin007';
let email = 'mateus@email.com';
let senha = '123';

//Adicionando um 'escutador' no botao e o que ele vai fazer
//quando for clicado
btn.addEventListener('click', () => {
    //Variaveis dos valores passados
    const usuarioValor = document.querySelector('#usuario').value;
    const senhaValor = document.querySelector('#senha').value;

    //Variavel do paragrafo onde vai aparecer se o perfil
    //é valido ou nao
    const formValidacao = document.querySelector('#form p');

    //if para validar se o usuario é valido ou nao
    if ((usuarioValor === usuario || usuarioValor === email) && senhaValor === senha) {
        //Adicionando valor ao paragrafo aonde vai mostrar se o
        //perfil e valido ou nao
        formValidacao.innerHTML = 'Perfil válido';

        //Adicionando a classe para caso for valido e retirando
        //a classe se for invalido
        formValidacao.classList.add('valido');
        formValidacao.classList.remove('invalido');
    } else {
        //Mesma coisa do de cima, mas para caso o perfil
        //for invalido
        formValidacao.innerHTML = 'Perfil inválido';
        formValidacao.classList.add('invalido');
        formValidacao.classList.remove('valido');
    };
});