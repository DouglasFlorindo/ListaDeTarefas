const lista = document.getElementById('lista');
const botaoCriar = document.getElementById('botaoCriar');
const inputTexto = document.getElementById('inputTexto');

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