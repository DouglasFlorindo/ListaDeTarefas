const lista = document.getElementById('lista');
const botaoCriar = document.getElementById('botaoCriar');

botaoCriar.addEventListener('click', criarTarefa);

function criarTarefa() {

    let conteudoTarefa = document.getElementById("inputTexto").value;

    if (conteudoTarefa) {

        let novoDiv = document.createElement('DIV');
        let novoP = document.createElement('P');
        let novoInput = document.createElement('INPUT');
        let novoButton = document.createElement('BUTTON');
        let novoSpan = document.createElement('SPAN');

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

function marcarTarefa() {

};

function deletarTarefa() {

};