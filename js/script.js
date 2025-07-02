  $(document).ready(function () {
    $("form").on("submit", function (e) {
      e.preventDefault(); // evita recarga

      // Validar campos simples (sólo como demostración)
         const nombre = $("#nombreCliente").val().trim();
         const tipoReparacion = $("#tipoReparacion").val();
         const descripcion = $("#descripcion").val().trim();
         const fecha = $("#fecha").val();
         const tarjeta = $("#numeroTarjeta").val().trim();
         const nombrePago = $("#nombretarjeta").val().trim();
         const cvv = $("#cvv").val().trim();

    if (nombre === "") {
      alert("Por favor ingresa tu nombre.");
      $("#nombreDatos").focus();
      return;
    }

    if (tipoReparacion === "") {
      alert("Por favor selecciona un tipo de reparación.");
      $("#tipoReparacion").focus();
      return;
    }

    if (descripcion === "") {
      alert("Por favor describe tu problema.");
      $("#descripcion").focus();
      return;
    }

    if (fecha === "") {
      alert("Por favor selecciona una fecha para la reparación.");
      $("#fecha").focus();
      return;
    }

    if (tarjeta === "" || !/^\d{16}$/.test(tarjeta.replace(/\s+/g, ""))) {
      alert("Por favor ingresa un número de tarjeta válido de 16 dígitos.");
      $("#numeroTarjeta").focus();
      return;
    }

    if (nombrePago === "") {
      alert("Por favor ingresa tu nombre completo para el pago.");
      $("#nombrePago").focus();
      return;
    }

    if (cvv === "" || !/^\d{3,4}$/.test(cvv)) {
      alert("Por favor ingresa un CVV válido de 3 o 4 dígitos.");
      $("#cvv").focus();
      return;
    }

      // Simulación de éxito
      alert("¡Gracias por tu solicitud! Pronto te contactaremos para confirmar la cita.");
      $(this).trigger("reset"); // limpia el formulario
    });
  });
