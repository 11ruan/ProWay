const usuarios = [
    {
        login: 'ruan',
        senha: 'ruan'
    },
    {
        login: 'bruna',
        senha: 'bruna'
    },
    {
        login: 'bryan',
        senha: 'bryan'
    },
];

const pegaLogin = document.getElementById('login')
const pegaSenha = document.getElementById('senha')
const botao = document.getElementById('bt')

const telaLogin = document.querySelector('.aquivoCompleto')
const telaPrincipal = document.querySelector('.aquivoBaixo')

botao.addEventListener('click' , validacao) 

function validacao(){

    const valorLogin = pegaLogin.value
    const valorSenha = pegaSenha.value

    let contador = 0

    usuarios.forEach((cont) => {
        if(valorLogin === cont.login && valorSenha === cont.senha){
            alert('Deu Certo');
            telaLogin.style.display = 'none';
            telaPrincipal.classList.remove('esconder')
            contador++
        }
    });
    if(contador == 0){
        alert('Usuario ou Senha Incorretos')
    }
}