  $(document).ready(function () {
    $("form").on("submit", function (e) {
      e.preventDefault(); // evita recarga

      // Validar campos simples (sólo como demostración)
      const nombre = $("#nombreCliente").val().trim();
      const tarjeta = $("#numeroTarjeta").val().trim();
      const cvv = $("#cvv").val().trim();

      if (nombre === "" || tarjeta === "" || cvv === "") {
        alert("Por favor completa todos los campos obligatorios.");
        return;
      }

      // Simulación de éxito
      alert("¡Gracias por tu solicitud! Pronto te contactaremos para confirmar la cita.");
      $(this).trigger("reset"); // limpia el formulario
    });
  });
