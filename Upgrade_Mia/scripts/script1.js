
//Função do evento: onmouse
function upS(x) {
    x.style.height = "30rem";
    x.style.width = "16rem";
    x.style.opacity = "1";

};

function downS(x) {
    x.style.height = "25rem";
    x.style.width = "15rem";
    x.style.opacity = "0.7"
};

let box = document.getElementsByClassName(movingBox);