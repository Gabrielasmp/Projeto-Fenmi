document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".searchbar input");
  const searchBtn = document.querySelector(".searchbar button");
  const sortSelect = document.getElementById("sort");
  const grid = document.querySelector(".grid");
  const cards = Array.from(document.querySelectorAll(".card-servico"));

  // Função de busca
  function filtrar() {
    const termo = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const titulo = card.querySelector("h3").textContent.toLowerCase();
      const descricao = card.querySelector("p").textContent.toLowerCase();
      if (titulo.includes(termo) || descricao.includes(termo)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Função de ordenação
  function ordenar() {
    const criterio = sortSelect.value;
    let ordenados = [...cards].filter(c => c.style.display !== "none");

    ordenados.sort((a, b) => {
      if (criterio === "avaliacao") {
        const notaA = parseFloat(a.querySelector(".rating span").textContent);
        const notaB = parseFloat(b.querySelector(".rating span").textContent);
        return notaB - notaA; // maior avaliação primeiro
      }
      if (criterio === "preco") {
        // aqui só de exemplo: pega pelo nome e ordena alfabeticamente (já que não tem preço real no HTML)
        return a.querySelector("h3").textContent.localeCompare(
          b.querySelector("h3").textContent
        );
      }
      if (criterio === "recentes") {
        return Math.random() - 0.5; // mock aleatório
      }
      return 0; // "relevante" mantém a ordem atual
    });

    // limpa e re-renderiza
    grid.innerHTML = "";
    ordenados.forEach(c => grid.appendChild(c));
  }

  // Eventos
  searchBtn.addEventListener("click", filtrar);
  searchInput.addEventListener("keyup", e => {
    if (e.key === "Enter") filtrar();
  });

  sortSelect.addEventListener("change", ordenar);
});
