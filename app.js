
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}

