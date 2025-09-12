// Seleciona os elementos
const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progress = document.querySelector(".progress");
const stepCircles = document.querySelectorAll(".step");

let currentStep = 0;

// Função para atualizar o formulário
function updateFormSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
    stepCircles[index].classList.toggle("active", index <= currentStep);
  });

  // Atualiza barra de progresso
  const progressPercent = (currentStep / (steps.length - 1)) * 100;
  progress.style.width = progressPercent + "%";
}

// Avançar
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateFormSteps();
    }
  });
});

// Voltar
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
    }
  });
});

// Enviar formulário
document.getElementById("solicitacaoForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Coleta os dados
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const detalhes = document.getElementById("detalhes").value;

  // Mostra resumo
  document.getElementById("resumoPedido").innerHTML = `
    <h2>Resumo do Pedido</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
    <p><strong>Detalhes:</strong> ${detalhes}</p>
    <p>✅ Seu pedido foi enviado com sucesso!</p>
  `;

  currentStep = steps.length - 1;
  updateFormSteps();

  // Aqui você pode integrar envio para backend, e-mail ou WhatsApp
});

// Inicializa
updateFormSteps();


// js/catalogo.js

const grid = document.getElementById("grid");

// Exemplo de lista de serviços
const servicos = [
  { nome: "Limpeza", desc: "Profissionais avaliados e com preço justo." },
  { nome: "Elétrica", desc: "Serviços rápidos e seguros para sua casa." },
  { nome: "Pintura", desc: "Deixe seu ambiente renovado e bonito." },
  { nome: "Tecnologia", desc: "Suporte técnico e soluções digitais." }
];

// Renderizar os cards
grid.innerHTML = servicos.map(servico => `
  <div class="card-servico">
    <h3>${servico.nome}</h3>
    <p>${servico.desc}</p>
    <button onclick="window.location.href='solicitacao.html'">Solicitar</button>
  </div>
`).join("");

