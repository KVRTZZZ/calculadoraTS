"use strict";
const botao = document.querySelectorAll(".num, .operator");
const display = document.querySelector("#display");
const igual = document.querySelector('.operator-equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
let displayData = '';
botao.forEach(btn => {
    btn.addEventListener("click", () => {
        const botaoValue = btn.getAttribute('data-num');
        displayData += botaoValue;
        display.textContent = displayData;
    });
});
if (igual !== null) {
    igual.addEventListener('click', () => {
        displayData = eval(displayData);
        display.textContent = displayData;
        displayData = '';
    });
}
if (clear !== null) {
    clear.addEventListener('click', () => {
        displayData = '';
        display.textContent = displayData;
    });
}
if (del !== null) {
    del.addEventListener("click", () => {
        let ultimoValor = display.textContent;
        if (ultimoValor !== null) {
            let novoValor = ultimoValor.substring(0, ultimoValor.length - 1);
            display.textContent = novoValor;
        }
        else {
            console.error("O valor de ultimoValor é null ou undefined");
        }
    });
}
;
