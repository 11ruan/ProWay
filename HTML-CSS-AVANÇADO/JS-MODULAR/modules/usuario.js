class Usuario {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

}

function imprimirNome(usuario) {
    return `O nome do usuário é ${usuario.nome}`;
}

function imprimirIdade(usuario) {
    return `O usuário tem ${usuario.idade} anos`;
}

function apresentarUsuario(usuario) {
    console.log(`Olá! Eu sou ${usuario.nome} e tenho ${usuario.idade} anos.`);
}

export default Usuario;

export {
    imprimirNome,
    imprimirIdade,
    apresentarUsuario
};