const botao = document.querySelectorAll(".num, .operator") as NodeListOf<HTMLElement>;
const display = document.querySelector("#display") as HTMLInputElement;
const igual = document.querySelector('.operator-equal')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')

let displayData = '';
let virgulaValida = false;
let parenteses = false

botao.forEach(btn =>  {
    btn.addEventListener("click", () => {
        const botaoValue = btn.getAttribute('data-num');
        
        if (botaoValue === ',') {
          if (virgulaValida) {
            return;
          } else {
            virgulaValida = true;
          }
        }
        displayData += botaoValue;
        display.textContent = displayData;
    });
});

if (igual !== null) {
    igual.addEventListener('click', () => {
    displayData=eval(displayData)
    display.textContent = displayData
    displayData = '';
    virgulaValida = false
});}

if (clear !== null) {
    
clear.addEventListener('click', () => {
    displayData = '';
    display.textContent = displayData;
    virgulaValida = false
});}

if (del !== null) {
    del.addEventListener("click", () => {
        let ultimoValor = display.textContent;
        
        if (ultimoValor !== null) {
            let novoValor = ultimoValor.substring(0, ultimoValor.length -1);
            displayData = novoValor;
            display.textContent = novoValor;
            if (novoValor.endsWith(',')) {
                virgulaValida = false
            }
            
        } else {
            console.error("O valor de ultimoValor é null ou undefined");
        }
    });
};



/*nescessita de ajustes
        if (botaoValue === "( )") {
            if (!parenteses) {
                let novoValorParentes = '('
                display.textContent = novoValorParentes
                parenteses = true
                displayData = novoValorParentes
            }else{
                let novoValorParentes = ')'
                display.textContent = novoValorParentes
                parenteses = false
                displayData = novoValorParentes
            }
        }
        */