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
        const precoA = parseFloat(
          a.querySelector(".preco").textContent.replace("R$", "").replace(",", ".").trim()
        );
        const precoB = parseFloat(
          b.querySelector(".preco").textContent.replace("R$", "").replace(",", ".").trim()
        );
        return precoA - precoB; // menor preço primeiro
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

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll(".card-servico");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const categoria = chip.textContent.trim().split("•")[0].trim().toLowerCase();

      cards.forEach(card => {
        const titulo = card.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(categoria)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Marca visualmente o chip selecionado
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });
});

