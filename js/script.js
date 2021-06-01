let buttonAk = document.querySelector(".body__buttonAk");
let akShow = document.querySelector(".body__image-akShow");
let spanAk = document.querySelector(".body__spanAk");
let buttonSoczewka = document.querySelector(".body__buttonSoczewka");
let soczewkaShow = document.querySelector(".body__image-soczewkaShow");
let spanSoczewka = document.querySelector(".body__spanSoczewka");


buttonAk.addEventListener("click", () => {
    akShow.classList.toggle("body__image-akHide");

    if (akShow.classList.contains("body__image-akHide")) {
        spanAk.innerText = "Pokaż";
    }
    else {
        spanAk.innerText = "Ukryj";
    }
});

buttonSoczewka.addEventListener("click", () => {
    soczewkaShow.classList.toggle("body__image-soczewkaHide");

    if (soczewkaShow.classList.contains("body__image-soczewkaHide")) {
        spanSoczewka.innerText = "Pokaż";
    }
    else {
        spanSoczewka.innerText = "Ukryj";
    }
});
