window.addEventListener("DOMContentLoaded", checkHeightImage);
window.addEventListener('resize', checkHeightImage);

function checkHeightImage() {
    var img = document.getElementById("banner");
    var icon_overflow = document.getElementById("overflow-alert");

    if(img.offsetHeight < window.innerHeight) {
        icon_overflow.classList.add("hide")
        console.log("ESCONDEU");
    } else {
        icon_overflow.classList.remove("hide")
        console.log("NÃO ESCONDEU");
    }
}