document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-motocycle-input");
    const resultCard = document.querySelectorAll(".result-card");
    const errorMsg = document.querySelector(".error-msg");

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = removeAccents(searchInput.value.toLowerCase());

        let foundResults = false;

        resultCard.forEach(function (card) {
            const cardBrand = removeAccents(card.querySelector(".brand").textContent.toLowerCase());
            const cardName = removeAccents(card.querySelector(".name").textContent.toLowerCase());
            const cardText = removeAccents(card.querySelector(".info").textContent.toLowerCase());

            if (cardBrand.includes(searchTerm) || cardName.includes(searchTerm) || cardText.includes(searchTerm)) {
                card.style.display = "block";
                foundResults = true;
            } else {
                card.style.display = "none";
            }

            errorMsg.classList.add("hide");
        });

        if (!foundResults) {
            errorMsg.classList.remove("hide");
        }
    });
});
