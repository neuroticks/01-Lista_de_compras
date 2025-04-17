// Seleciona a lista e o botão
const lista = document.getElementById('minhaLista');
const botaoAdicionar = document.getElementById('botaoAdicionar');

// Função para adicionar um novo item à lista
function adicionarItem() {
    const novoItem = document.createElement('li');
    novoItem.textContent = `Item ${lista.children.length + 1}`; // Texto do novo item
    lista.appendChild(novoItem); // Adiciona o item à lista
}

// Adiciona um evento de clique ao botão
botaoAdicionar.addEventListener('click', adicionarItem);

// Opcional: Adicionar um item inicialmente (se necessário)
// adicionarItem();