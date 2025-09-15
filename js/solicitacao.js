// script solicitacao.js
document.addEventListener("DOMContentLoaded", () => {
  const formSteps = document.querySelectorAll(".form-step");
  const progress = document.querySelector(".progress-bar .progress");
  const steps = document.querySelectorAll(".progress-bar .step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const radiosPagamento = document.querySelectorAll("input[name='pagamento']");
  const dadosCartao = document.getElementById("dadosCartao");

  let currentStep = 0;

  // Atualiza exibição do passo
  function updateSteps() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });

    steps.forEach((step, index) => {
      step.classList.toggle("active", index <= currentStep);
    });

    // Barra de progresso
    const percent = (currentStep / (formSteps.length - 1)) * 100;
    progress.style.setProperty("--progress", `${percent}%`);
    progress.style.width = `${percent}%`;
  }

  // Botões "Próximo"
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep < formSteps.length - 1) {
        currentStep++;
        updateSteps();
      }
    });
  });

  // Botões "Voltar"
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateSteps();
      }
    });
  });

  // Mostrar/esconder dados do cartão
  radiosPagamento.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "Cartão") {
        dadosCartao.style.display = "block";
      } else {
        dadosCartao.style.display = "none";
      }
    });
  });

  // Envio do formulário
  const form = document.getElementById("solicitacaoForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Pega dados do form
    const formData = new FormData(form);
    let resumo = "<h3>Resumo do Pedido:</h3><ul>";

    formData.forEach((value, key) => {
      resumo += `<li><strong>${key}:</strong> ${value}</li>`;
    });

    resumo += "</ul>";
    document.getElementById("resumoPedido").innerHTML = resumo;

    alert("Formulário enviado com sucesso!");
  });

  updateSteps();
});
