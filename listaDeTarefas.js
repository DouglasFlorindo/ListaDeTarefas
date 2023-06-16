const lista = document.getElementById('lista');
const botaoCriar = document.getElementById('botaoCriar');
const inputTexto = document.getElementById('inputTexto');

if (navigator.language === 'pt-BR') {
    document.title = 'Lista de Tarefas';
    document.getElementById('titulo').textContent = 'Lista de Tarefas';
    document.getElementById('inputTexto').setAttribute('placeholder', 'Insira a sua tarefa aqui...');  
    document.getElementById('footer').textContent = 'Este site não salva as suas tarefas nem os seus dados.';
    document.getElementById('configTexto').textContent = 'Escolha o seu tema:';
};

botaoCriar.addEventListener('click', criarTarefa);

inputTexto.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        criarTarefa();
    }
});

function criarTarefa() {

    let conteudoTarefa = document.getElementById("inputTexto").value;

    if (conteudoTarefa) {

        let novoDiv = document.createElement('dib');
        let novoP = document.createElement('p');
        let novoInput = document.createElement('input');
        let novoButton = document.createElement('button');
        let novoSpan = document.createElement('span');

        novoDiv.className = "itemLista";
        lista.appendChild(novoDiv);

        novoInput.className = "checkBox";
        novoInput.type = "checkBox";
        novoInput.setAttribute("onchange", "marcarTarefa(this)");
        novoDiv.appendChild(novoInput);

        novoP.className = "itemLista";
        novoP.textContent = conteudoTarefa;
        novoDiv.appendChild(novoP);

        novoButton.className = "botaoDeletar";
        novoButton.setAttribute("onclick", "deletarTarefa(this)");
        novoDiv.appendChild(novoButton);

        novoSpan.className = "material-symbols-rounded";
        novoSpan.textContent = "delete";
        novoButton.appendChild(novoSpan);
    }
};

function marcarTarefa(elemento) {
    if (elemento.checked) {
        elemento.nextElementSibling.classList.add('feito');
    } else {
        elemento.nextElementSibling.classList.remove('feito');
    };
};

function deletarTarefa(elemento) {
    elemento.parentElement.remove();
};

function trocarTema(tema) {
    let root = document.querySelector(':root');
    let modal = document.getElementById('config');

    switch (tema) {
        case "1":
            root.style.setProperty('--tema', 'linear-gradient(to right top, #e86284, #df75b6, #c38edf, #9ca7f7, #73bcff)');
            root.style.setProperty('--destaque', '#ec2356');
            modal.close();
            break;
        case "2":
            root.style.setProperty('--tema', 'linear-gradient(to right top, #031542, #00427b, #006f8d, #009968, #55bc04)');
            root.style.setProperty('--destaque', '#81A5FE');
            modal.close();
            break;
    }
};
