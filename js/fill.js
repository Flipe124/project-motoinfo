function fillCard(src_img, brand, model, info, cc, power, torque, fuel, fuel_capacity, oil_capacity, gear, seat_height, soil_height, max_speed) {
    var elementSectionSearchResult = document.querySelector("#section-search-result");
    const UNIT_TORQUE = "kgfm";
    const UNIT_POWER = "cv";
    const UNIT_VOLUME = "L";
    const UNIT_SPEED = "Km/h";

    elementSectionSearchResult.innerHTML +=
        `<div class="result-card" data-srcimg="${src_img}" data-brand="${brand}"
            data-name="${model}" data-info="${info}" data-cc="${cc}" data-power="${power}" data-torque="${torque}"
            data-fuel="${fuel}" data-fuel_capacity="${fuel_capacity}" data-oil_capacity="${oil_capacity}" data-gear="${gear}"
            data-seat_height="${seat_height}" data-soil_height="${soil_height}">
            <div class="moto-img">
                <img src="${src_img}" alt="Imagem da ${brand} ${model}">
            </div>
            <div class="data">
                <span class="brand">${brand}</span>
                <span class="name">${model}</span>
                <p class="info">
                    ${info}
                </p>
                <div class="resume">
                    <!--<div class="">
                        <i class="fa-solid fa-database"></i>
                        <span>${cc}cc</span>
                    </div>-->
                    <div class="power">
                        <i class="fa-solid fa-horse-head"></i>
                        <span>${power + UNIT_POWER}</span>
                    </div>
                    <div class="torque">
                        <i class="fa-solid fa-wrench"></i>
                        <span>${torque + UNIT_TORQUE}</span>
                    </div>
                    <div class="">
                        <i class="fa-solid fa-gauge-high"></i>
                        <span>${max_speed ? max_speed + UNIT_SPEED : "Indefinido"}</span>
                    </div>
                    <div class="">
                    <i class="fa-solid fa-battery-full"></i>
                    <!-- <i class="fa-solid fa-gas-pump"></i> -->
                        <span>${fuel_capacity + UNIT_VOLUME}</span>
                    </div>
                    <div class="max-width">
                        <span><i class="fa-solid fa-gas-pump"></i> 25km/L</span>
                    </div>
                </div>
            </div>
        </div>`;
}