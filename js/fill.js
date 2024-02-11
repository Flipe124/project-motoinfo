// function fillCard(src_img, brand, model, info, cc, power, torque, fuel, fuel_capacity, oil_capacity, gear, seat_height, soil_height, max_speed) {
function fillCard(motorcycle) {
    var elementSectionSearchResult = document.querySelector("#section-search-result");
    const UNIT_TORQUE = "kgfm";
    const UNIT_POWER = "cv";
    const UNIT_VOLUME = "L";
    const UNIT_SPEED = "Km/h";

    elementSectionSearchResult.innerHTML +=
        `<div class="result-card" data-srcimg="${motorcycle.src_img}" data-brand="${motorcycle.brand}"
            data-name="${motorcycle.gearmodel}" data-info="${motorcycle.info}" data-cc="${motorcycle.cc}" data-power="${motorcycle.power}" data-torque="${motorcycle.torque}"
            data-fuel="${motorcycle.fuel}" data-fuel_capacity="${motorcycle.fuel_capacity}" data-oil_capacity="${motorcycle.oil_capacity}" data-gear="${motorcycle.gear}"
            data-seat_height="${motorcycle.seat_height}" data-soil_height="${motorcycle.soil_height}">
            <div class="moto-img">
                <img src="${motorcycle.src_img}" alt="Imagem da ${motorcycle.brand} ${motorcycle.model}">
            </div>
            <div class="data">
                <span class="brand">${motorcycle.brand}</span>
                <span class="name">${motorcycle.model}</span>
                <p class="info">
                    ${motorcycle.info}
                </p>
                <div class="resume">
                    <!--<div class="">
                        <i class="fa-solid fa-database"></i>
                        <span>${motorcycle.cc}cc</span>
                    </div>-->
                    <div class="power">
                        <i class="fa-solid fa-horse-head"></i>
                        <span>${motorcycle.power + UNIT_POWER}</span>
                    </div>
                    <div class="torque">
                        <i class="fa-solid fa-wrench"></i>
                        <span>${motorcycle.torque + UNIT_TORQUE}</span>
                    </div>
                    <div class="">
                        <i class="fa-solid fa-gauge-high"></i>
                        <span>${motorcycle.max_speed ? motorcycle.max_speed + UNIT_SPEED : "Indefinido"}</span>
                    </div>
                    <div class="">
                    <i class="fa-solid fa-battery-full"></i>
                    <!-- <i class="fa-solid fa-gas-pump"></i> -->
                        <span>${motorcycle.fuel_capacity + UNIT_VOLUME}</span>
                    </div>
                    <div class="max-width">
                        <span><i class="fa-solid fa-gas-pump"></i> 25km/L</span>
                    </div>
                </div>
            </div>
        </div>`;
}