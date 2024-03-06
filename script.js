document.addEventListener("DOMContentLoaded", function() {
    const acordeones = document.querySelectorAll(".acordeon");

    acordeones.forEach((acordeon) => {
        const titulos = acordeon.querySelectorAll(".h2");
        const contenidos = acordeon.querySelectorAll(".contenido");

        titulos.forEach((titulo, index) => {
            titulo.addEventListener("click", () => {
                contenidos.forEach((contenido, i) => {
                    if (i === index) {
                        contenido.classList.toggle("activo");
                    } else {
                        contenido.classList.remove("activo");
                    }
                });
            });
        });
    });
});





