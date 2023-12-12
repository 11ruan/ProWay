import Usuario from "./modules/usuario.js";


import { imprimirNome, imprimirIdade, apresentarUsuario } from "./modules/usuario.js";
 
import { validarIdade } from "./modules/validarMaioridade.js";


const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const btn = document.getElementById('btn');
const mostrar = document.getElementById('mostrar');

btn.addEventListener('click', () => {
    dadosUsua(nome, idade);
})

function dadosUsua(nome, idade) {
    const usuario1 = new Usuario(nome.value, idade.value);
    mostrar.innerHTML += `<h2> ${imprimirNome(usuario1)} ${imprimirIdade(usuario1)} </h2>`;
}

console.log('------------------------------------');

// imprimirNome(usuario1);
// imprimirIdade(usuario1);
// apresentarUsuario(usuario1);
// validarIdade(usuario1);
