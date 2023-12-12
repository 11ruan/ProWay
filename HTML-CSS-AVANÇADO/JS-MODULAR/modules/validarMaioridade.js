function validarIdade(usuario) {
    if (usuario.idade >= 18) {
        console.log('Usuario é maior de idade');
    } else {
        console.log('Usuario é menor de idade');
    }
}
export {
    validarIdade
};