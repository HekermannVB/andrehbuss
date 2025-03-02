document.addEventListener("DOMContentLoaded", function () {
    var title = document.querySelector(".about-me");

    function checkScroll() {
        var positionTitle = title.getBoundingClientRect();
        if (positionTitle.top < window.innerHeight - 200) {
            title.classList.add("show"); // Ativa animação ao rolar
            window.removeEventListener("scroll", checkScroll); // Remove o evento após ativar
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Garante que funciona se o usuário já estiver na posição
});
