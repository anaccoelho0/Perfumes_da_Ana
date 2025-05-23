let index = 0;
  const slides = document.querySelectorAll('.carrossel-slide');

  function mostrarSlide() {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'flex' : 'none';
    });
    index = (index + 1) % slides.length;
  }

  mostrarSlide();
  setInterval(mostrarSlide, 4000);



  const carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  alert(`${nome} adicionado ao carrinho!`);

  // Armazenar no localStorage (opcional)
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}



