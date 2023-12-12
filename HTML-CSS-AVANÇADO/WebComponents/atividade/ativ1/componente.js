class CardAula extends HTMLElement {


    constructor() {

        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // Criando uma DIV que será o elemento corpo do Componente
        const componentBody = document.createElement('div');
        componentBody.setAttribute('class', 'component-body');

        const componentDivImg = document.createElement('div');
        componentDivImg.setAttribute('class', 'component-imagem');

        const componentImg = document.createElement('img');
        componentImg.setAttribute('class', 'componenteImagem');
        componentImg.setAttribute('src', this.getAttribute('imagem'));


        const componentTitle = document.createElement('h2');
        componentTitle.setAttribute('class', 'componentTitle');
        componentTitle.textContent = this.getAttribute('titulo-componente');

        const componentContent = document.createElement('p');
        componentContent.setAttribute('class', 'componenteContent');
        componentContent.appendChild(document.createElement('slot'));

        const componentButton = document.createElement('button');
        componentButton.setAttribute('class', 'componenteButton');
        componentButton.textContent = 'Go somewhere'



        // Criando o Estilo do Componente
        const componentStyle = document.createElement('style');
        componentStyle.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .component-body{
            border: solid 1px #000;
            color: #fff;
            text-align: left;
            width: 200px;
            height: 400px;
            border-radius: 5px;
            margin: 20px;
            background-color: #fff;

        }
        .componentTitle{
            color: black;
            font-size: 15px;
            text-align: left;
            margin: 10px;
        }

        .componenteContent{
            color: black;
            text-align: left;
            margin: 10px;

        }
        .componenteButton{
           
            background-color: blue;
            border-radius: 5px;
            padding: 10px;
            color:  #fff;
            border: none;
            font-size: 13px;
            margin: 10px;

        }
        .componenteImagem{
            width: 100%;
        }
        .component-imagem{
            margin: 0;
        }

        `;
        // Inserindo o titulo dentro do corpo do componentes
        componentDivImg.appendChild(componentImg);
        componentBody.appendChild(componentDivImg);
        componentBody.appendChild(componentTitle);
        componentBody.appendChild(componentContent);
        componentBody.appendChild(componentButton);

        // Indexar os elemento criamos no ShadowDOM
        shadow.appendChild(componentStyle);
        shadow.appendChild(componentBody);

    }
}
customElements.define('card-aula', CardAula);