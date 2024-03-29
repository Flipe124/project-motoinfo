const elementBody = document.querySelector("body");
const elementModalBlock = document.querySelector(".modal-block");
const elementModal = document.querySelector(".modal");
const elementModalContent = document.querySelector(".modal-content");

const elementsResultCard = document.querySelectorAll(".result-card");
const elementButtonCloseModal = document.querySelector(".button-close-modal");

const UNIT_LENGTH = "mm";
const UNIT_CAPACITY = "L";
const UNIT_POWER = "cv";
const UNIT_STRENGHT = "Kgfm";
const UNIT_CUBIC_CAPACITY = "cc";

const ICON_NOT_FOUND = "../img/icon-not-found.png";

function fillModalSpecs(element) {
    elementModalBlock.classList.remove("hide");
    elementBody.classList.add("overflow-hidden");
    
    elementModalBlock.innerHTML = 
    `
    <div class="modal">
            <button class="button button-close-modal" onclick="closeModalSpecs()"><i class="fa-solid fa-xmark"></i></button>
            <h1>Ficha Técnica</h1>
            <div class="modal-content-img">
                <img src="${element.dataset.srcimg ? element.dataset.srcimg : ICON_NOT_FOUND}" alt="">
            </div>
            <div class="motocycle-model">${element.dataset.brand + " " + element.dataset.name}</div>
            <ul class="switch">
                <li><button class="button active" id="engine" data-option="engine" onclick="buttonSwitch(this)">Motor</button></li>
                <li><button class="button" id="fuel" data-option="fuel" onclick="buttonSwitch(this)">Combustível</button></li>
                <li><button class="button" id="dimensions" data-option="dimensions" onclick="buttonSwitch(this)">Dimensões</button></li>
                <li><button class="button" id="transmission" data-option="transmission" onclick="buttonSwitch(this)">Transmissão</button></li>
            </ul>
            <div class="table">
                <div class="modal-content info-engine" id="info-engine">
                    <div class="table-line">
                        <span class="info">Cilindrada</span>
                        <span class="value cc">${element.dataset.cc ? element.dataset.cc + UNIT_CUBIC_CAPACITY : "-"}</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Potência</span>
                        <span class="value power">${element.dataset.power ? element.dataset.power + UNIT_POWER : "-"}</span>
                    </div>
                    <div class="table-line ">
                        <span class="info">Potência</span>
                        <span class="value power">${element.dataset.torque ? element.dataset.torque + UNIT_STRENGHT : "-"}</span>
                    </div>
                    <div class="table-line">
                        <span class="info">Capacidade de Óleo</span>
                        <span class="value oil-capacity">${element.dataset.oil_capacity ? element.dataset.oil_capacity + UNIT_CAPACITY : "-"}</span>
                    </div>
                </div>
                <div class="modal-content info-fuel" id="info-fuel">
                    <div class="table-line">
                        <span class="info">Combústivel</span>
                        <span class="value fuel">${element.dataset.fuel ? element.dataset.fuel : "-"}</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Capacidade Combústivel</span>
                        <span class="value fuel-capacity">${element.dataset.fuel_capacity ? element.dataset.fuel_capacity + UNIT_CAPACITY : "-"}</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Consumo de combústivel</span>
                        <span class="value ">30km/L</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Autonomia com tanque</span>
                        <span class="value ">450km</span>
                    </div>
                </div>
                <div class="modal-content info-transmission" id="info-transmission">
                    <div class="table-line striped">
                        <span class="info">Embreagem</span>
                        <span class="value ">Multidisco banhada a óleo</span>
                    </div>
                    <div class="table-line">
                        <span class="info">Velocidades</span>
                        <span class="value gear">${element.dataset.gear ? element.dataset.gear : "-"}</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Transmissão final</span>
                        <span class="value ">Por corrente</span>
                    </div>
                </div>
                <div class="modal-content info-dimensions" id="info-dimensions">
                    <div class="table-line">
                        <span class="info">Altura do Solo</span>
                        <span class="value soil-height">${element.dataset.soil_height ? element.dataset.soil_height + UNIT_LENGTH : "-"}</span>
                    </div>
                    <div class="table-line">
                        <span class="info">Altura Assento</span>
                        <span class="value seat-height">${element.dataset.seat_height ? element.dataset.seat_height + UNIT_LENGTH : "-"}</span>
                    </div>
                    <div class="table-line striped">
                        <span class="info">Altura total</span>
                        <span class="value ">1080mm</span>
                    </div>
                </div>
            </div>
        </div>
    `

    // elementModal.classList.add("translate-25");
}


function closeModalSpecs() {
    elementModalBlock.classList.add("fade-out");

    setTimeout(function () {
        hideModal();
    }, 450);
}

function hideModal() {
    elementBody.classList.remove("overflow-hidden");
    elementModalBlock.classList.add("hide");
    elementModalBlock.classList.remove("fade-out");
}

// function buttonActive

function buttonSwitch(option){
    var modalContent = document.querySelectorAll(".modal-content");
    var modalContentSelect = document.querySelector(`.modal-content #info-${option.getAttribute("data-option")}`)
    var buttonsOption = document.querySelectorAll(".switch .button")
    var optionButton = document.querySelector(`#${option.getAttribute("id")}`);

    modalContent.forEach(function(element) {
        element.classList.add("hide");
        console.log("Erro ao esconder elemento")
    });
    
    modalContentSelect != null ? modalContentSelect.classList.remove("hide") : console.log("ModalContentSelect vazio");

    // console.log(modalContentSelect);

    // modalContentSelect.classList.remove("hide");

    buttonsOption.forEach(function(element) {
        element.classList.remove("active");
        console.log("Erro remover ativação");
    });

    optionButton.classList.remove("hide");
    optionButton.classList.add("active")
    
}