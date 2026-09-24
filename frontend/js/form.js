document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const fields = form.querySelectorAll("#contato-nome, #contato-email, #contato-mensagem");

  // Regras: retornam a mensagem de erro, ou "" se estiver válido
  const rules = {
    nome: (v) => {
      if (!v) return "Informe seu nome.";
      if (v.length < 2) return "O nome deve ter pelo menos 2 caracteres";
      return "";
    },
    email: (v) => {
      if (!v) return "Informe seu e-mail.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Informe um e-mail válido";
      return "";
    },
    mensagem: (v) => {
      if (!v) return "Escreva sua mensagem.";
      if (v.length < 10) return "A mensagem deve ter pelo menos 10 caracteres";
      return "";
    },
  };

  function setError(input, message) {
    const wrapper = input.closest(".frame, .frame-2, .frame-3");
    const container = wrapper.parentElement;
    let errorEl = container.querySelector(".field-error");

    if (!message) {
      if (errorEl) errorEl.remove();
      wrapper.classList.remove("has-error");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      return;
    }

    if (!errorEl) {
      errorEl = document.createElement("p");
      errorEl.className = "field-error";
      errorEl.id = `${input.id}-erro`;
      errorEl.setAttribute("role", "alert");
      container.appendChild(errorEl);
    }
    errorEl.textContent = message;
    wrapper.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", errorEl.id);
  }

  function validateField(input) {
    const value = input.value.trim(); // "   " conta como vazio
    const message = rules[input.name](value);
    setError(input, message);
    return !message;
  }

  // Valida ao sair do campo e limpa o erro enquanto a pessoa digita
  fields.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") validateField(input);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Valida todos os campos e foca o primeiro com erro
    let firstInvalid = null;
    fields.forEach((input) => {
      if (!validateField(input) && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Envia os valores já sem espaços nas pontas
    fields.forEach((input) => (input.value = input.value.trim()));
    const data = new FormData(form);

    submitButton.style.pointerEvents = "none"; // evita envio duplicado
    submitButton.style.opacity = "0.7";

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => {
        // fetch só rejeita em falha de rede; erros 4xx/5xx precisam ser checados aqui
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        form.reset();
        mostrarMensagemDeSucesso();
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
        mostrarMensagemDeErro();
      })
      .finally(() => {
        submitButton.style.pointerEvents = "";
        submitButton.style.opacity = "";
      });
  });
});

function mostrarMensagemDeSucesso() {
  alert("Mensagem enviada! Em breve entraremos em contato");
}

function mostrarMensagemDeErro() {
  alert("Não foi possível enviar agora. Tente novamente em instantes");
}