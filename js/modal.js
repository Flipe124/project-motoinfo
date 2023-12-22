const elementBody = document.querySelector("body");
const elementModal = document.querySelector(".modal-block");

const elementsResultCard = document.querySelectorAll(".result-card");
const elementButtonCloseModal = document.querySelector(".button-close-modal");

for (const elementResultCard of elementsResultCard) {
    elementResultCard.addEventListener("click", function () {
        elementModal.classList.remove("hide");
    });
}

elementButtonCloseModal.addEventListener("click", function () {
    elementBody.classList.remove("overflow-hidden");
    elementModal.classList.add("hide");
});

