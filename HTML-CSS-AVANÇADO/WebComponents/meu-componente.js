class MeuComponente extends HTMLElement {

    constructor() {

        super();

        // Cria um Vínculo da ShadowDOM dentro do componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Criando uma DIV que será o elemento corpo do Componente
        const componentBody = document.createElement('div');
        componentBody.setAttribute('class', 'component-body');

        const componentTitle = document.createElement('h2');
        componentTitle.setAttribute('class', 'componentTitle');
        componentTitle.textContent = this.getAttribute('titulo-componente')

        const componentContent = document.createElement('p');
        componentContent.setAttribute('class', 'componenteContent');
        componentContent.appendChild(document.createElement('slot'));


        // Criando o Estilo do Componente
        const componentStyle = document.createElement('style');
        componentStyle.textContent = `
        .component-body{
            margin:20px;
            width: 200px;
            padding: 15px;
            border-radius: 10px;
            background-color: ${this.getAttribute('minha-cor') || 'blue'};
            color: #fff;
            text-align: center;
        }
            .componentTitle{
            background: seagreen;
            padding: 10px;
            font - family: calibri;

        }

        .componenteContent{
            border: solid 1px seagreen;
            padding: 10px;
            background: white;
            color: #333;
            font-family: calibri;
        }

        `;// Inserindo o titulo dentro do corpo do componentes
        componentBody.appendChild(componentTitle);
        componentBody.appendChild(componentContent);

        // Indexar os elemento criamos no ShadowDOM
        shadow.appendChild(componentStyle);
        shadow.appendChild(componentBody);
        

    };

}
// Definindo o nome da tag e a classe que controla o componente
customElements.define('meu-componente', MeuComponente);