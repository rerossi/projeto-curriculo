document.addEventListener("DOMContentLoaded", function() {
    const enviarButton = document.querySelector(".enviar");

    enviarButton.addEventListener("click", function() {
      const mensagemEnviadaModal = document.getElementById("modalMensagemEnviada");
      const modal = new bootstrap.Modal(mensagemEnviadaModal);
      modal.show();
    });
  });