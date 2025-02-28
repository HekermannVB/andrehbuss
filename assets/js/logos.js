document.addEventListener("DOMContentLoaded", function () {
    let logosContainer = document.getElementById("logos-container");

    if (!logosContainer) return;

    let scrollAmount = 0;
    let step = 2; // Velocidade do scroll
    let delay = 30; // Tempo entre cada passo

    function autoScroll() {
        scrollAmount += step;

        if (scrollAmount >= logosContainer.scrollWidth - logosContainer.clientWidth) {
            scrollAmount = 0; // Reinicia o scroll ao começo
        }

        logosContainer.scrollLeft = scrollAmount;
    }

    setInterval(autoScroll, delay);
});