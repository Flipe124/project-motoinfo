const elementBody = document.querySelector("body");
const elementModalBlock = document.querySelector(".modal-block");
const elementModal = document.querySelector(".modal");
const elementModalContent = document.querySelector(".modal-content");

const elementsResultCard = document.querySelectorAll(".result-card");
const elementButtonCloseModal = document.querySelector(".button-close-modal");

for (const elementResultCard of elementsResultCard) {
    elementResultCard.addEventListener("click", function () {
        elementModalBlock.classList.remove("hide");
        elementBody.classList.add("overflow-hidden");
        elementModal.classList.add("translate-25");

        const fieldDataMotocycleImg = document.querySelector(".modal-content-img img")
        const fieldDataNameMotocycle = document.querySelector(".motocycle-model");
        const fielDataName = document.querySelector(".data .name");

        fieldDataMotocycleImg.setAttribute("src", elementResultCard.dataset.srcimg);
        fieldDataNameMotocycle.innerHTML = `${elementResultCard.dataset.brand} ${elementResultCard.dataset.name}`;
        console.log(elementResultCard.dataset.brand)
    });
}

elementButtonCloseModal.addEventListener("click", function () {
    elementModalBlock.classList.add("fade-out");

    setTimeout(function () {
        hideModal();
    }, 450);
});

function hideModal() {
    elementBody.classList.remove("overflow-hidden");
    elementModalBlock.classList.add("hide");
    elementModalBlock.classList.remove("fade-out");
}