const botonReserva = document.getElementById("reservarBtn");

botonReserva.addEventListener("click", () => {
    const ahora = new Date();
    const horaActual = ahora.getHours();

    // Horario de 10 a 19
    if (horaActual >= 10 && horaActual < 19) {
        alert(
            "¡Estamos abiertos! ✂️\n" +
            "Podés reservar tu turno ahora.\n\n" +
            "Además nuestro Barber & Bar está disponible 🍹\n" +
            "Horario: 10:00 a 19:00"
        );

        // Opcional: abrir WhatsApp (modo freelance real)
        // window.open("https://wa.me/5491100000000", "_blank");

    } else {
        alert(
            "La barbería está cerrada en este momento ⛔\n\n" +
            "Horario de atención: 10:00 a 19:00\n" +
            "¡Te esperamos mañana para tu corte y unos tragos! 🍹"
        );
    }
});