/* -- Spread [...var] -- */

/*
const jogador= {
    nome : "Mateus",
    energia : 100,
    vidas : 3,
    magias : 5
};

const jogador2= {
    nome : "Lucas",
    energia : 650,
    vidas : 2,
    velocidade : 30
};

const jogador3= {...jogador, ...jogador2};

console.log(jogador3)
*/

/*
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1,5,4]

console.log(soma(...valores))
*/

/*
const objs = document.getElementsByTagName("div");

console.log(objs)

const objs2 = [...document.getElementsByTagName("div")];

console.log(objs2)

objs2.forEach(element => {
   element.innerText = "Pedro"
});
*/

/*
var btn = document.querySelector("#div1 button")
var body = document.querySelector("#body")

btn.addEventListener("click", function(){
    body.className === "active" ? body.classList.remove("active") : body.classList.add("active");
})
*/

var buttons = document.querySelectorAll(".botao button");
var body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        mudarCor(this);
    });
});

function mudarCor(botao){
    let cor = botao.getAttribute("data-cor");

    body.style.backgroundColor = cor;
};