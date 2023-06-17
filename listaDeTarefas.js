if (navigator.language === 'pt-BR') {
    document.documentElement.lang = 'pt-br';
    document.title = 'Lista de Tarefas';
    
    document.getElementById('titulo').textContent = 'Lista de Tarefas';
    document.getElementById('labelInputTexto').textContent = 'Insira a sua tarefa aqui:';
    document.getElementById('inputTexto').setAttribute('placeholder', 'Insira a sua tarefa aqui...');  
    document.getElementById('botaoCriar').setAttribute('aria-label', 'Criar nova tarefa');
    document.getElementById('footer').textContent = 'Este site não salva as suas tarefas nem os seus dados.';
    document.getElementById('creditosTexto').textContent = 'Feito por';
    document.getElementById('configTexto').textContent = 'Escolha o seu tema:';
    document.getElementById('tema1').setAttribute('aria-label', 'tema 1: tons de rosa, azul e roxo com destaques em vermelho');
    document.getElementById('tema2').setAttribute('aria-label', 'tema 2: tons de azul, verde e amarelo com destaques em azul');
    document.getElementById('tema3').setAttribute('aria-label', 'tema 3: tons de amarelo, laranja e roxo com destaques em roxo');
};

document.getElementById('botaoCriar').addEventListener('click', criarTarefa);

document.getElementById('inputTexto').addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        criarTarefa();
    }
});

function criarTarefa() {

    let conteudoTarefa = document.getElementById("inputTexto").value;

    if (conteudoTarefa) {
        const lista = document.getElementById('lista');
        let novoDiv = document.createElement('div');
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

        novoButton.className = "botaoDeletar icon";
        novoButton.setAttribute("onclick", "deletarTarefa(this)");
        novoDiv.appendChild(novoButton);

        novoSpan.className = "clicavel material-symbols-rounded";
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

    switch (tema) {
        case "1":
            root.style.setProperty('--tema', 'linear-gradient(to right top, #e86284, #df75b6, #c38edf, #9ca7f7, #73bcff)');
            root.style.setProperty('--destaque', '#ec2356');
            break;
        case "2":
            root.style.setProperty('--tema', 'linear-gradient(to right top, #49e2ee, #14f0db, #4bfab5, #8eff82, #d2ff47)');
            root.style.setProperty('--destaque', '#4A56C4');
            break;
        case "3":
            root.style.setProperty('--tema', 'linear-gradient(to right top, #fff277, #ffbc57, #ff7b6b, #ff36a0, #d633df)');
            root.style.setProperty('--destaque', '#C900D4')
    }
};
