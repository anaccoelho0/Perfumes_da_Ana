// carrinho.js

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se o produto já está no carrinho
  const produtoExistente = carrinho.find(item => item.nome === nome);

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho.`);
}