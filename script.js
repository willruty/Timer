function getTimeSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

console.log(getTimeSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
})
pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
})
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    segundos = 0;
    relogio.innerHTML = '00:00:00';
})