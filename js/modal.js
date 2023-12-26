const elementBody = document.querySelector("body");
const elementModalBlock = document.querySelector(".modal-block");
const elementModal = document.querySelector(".modal");
const elementModalContent = document.querySelector(".modal-content");

const elementsResultCard = document.querySelectorAll(".result-card");
const elementButtonCloseModal = document.querySelector(".button-close-modal");

const unitLength = "mm";
const unitCapacity = "L";
const unitPower = "cv"
const unitCubicCapacity = "cc";

for (const elementResultCard of elementsResultCard) {
    elementResultCard.addEventListener("click", function () {
        elementModalBlock.classList.remove("hide");
        elementBody.classList.add("overflow-hidden");
        elementModal.classList.add("translate-25");

        const fieldDataMotocycleImg = document.querySelector(".modal-content-img img")
        const fieldDataNameMotocycle = document.querySelector(".motocycle-model");
        const fielDataName = document.querySelector(".data .name");

        const ModalTableValueCcField = document.querySelector(".table .cc");
        const ModalTableValueGearField = document.querySelector(".table .gear");
        const ModalTableValueFuelField = document.querySelector(".table .fuel");
        const ModalTableValuePowerField = document.querySelector(".table .power");
        const ModalTableValueFuelCapacityField = document.querySelector(".table .fuel-capacity");
        const ModalTableValueOilCapacityField = document.querySelector(".table .oil-capacity");
        const ModalTableValueSeatHeightField = document.querySelector(".table .seat-height");
        const ModalTableValueSoilHeightField = document.querySelector(".table .soil-height");

        fieldDataMotocycleImg.setAttribute("src", elementResultCard.dataset.srcimg);
        fieldDataNameMotocycle.innerHTML = `${elementResultCard.dataset.brand ? elementResultCard.dataset.brand : "--"} ${elementResultCard.dataset.name ? elementResultCard.dataset.name : "--"}`;

        ModalTableValuePowerField.innerHTML = `${elementResultCard.dataset.power ? elementResultCard.dataset.power + unitPower : "--"}`;
        ModalTableValueCcField.innerHTML = `${elementResultCard.dataset.cc ? elementResultCard.dataset.cc + unitCubicCapacity : "--"}`;
        ModalTableValueGearField.innerHTML = `${elementResultCard.dataset.gear ? elementResultCard.dataset.gear : "--"}`;
        ModalTableValueFuelField.innerHTML = `${elementResultCard.dataset.fuel ? elementResultCard.dataset.fuel : "--"}`;
        ModalTableValueFuelCapacityField.innerHTML = `${elementResultCard.dataset.fuel_capacity ? elementResultCard.dataset.fuel_capacity + unitCapacity : "--"}`;
        ModalTableValueOilCapacityField.innerHTML = `${elementResultCard.dataset.oil_capacity ? elementResultCard.dataset.oil_capacity + unitCapacity : "--"}`;
        ModalTableValueSeatHeightField.innerHTML = `${elementResultCard.dataset.seat_height ? elementResultCard.dataset.seat_height + unitLength : "--"}`;
        ModalTableValueSoilHeightField.innerHTML = `${elementResultCard.dataset.soil_height ? elementResultCard.dataset.soil_height + unitLength : "--"}`;

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