// Declaración de variables para el cronometro
let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Selección de elementos HTML
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Función para iniciar el cronometro
function startTimer() {
    if (!running) {
        running = true;
        startButton.innerText = 'Iniciado'; //Al iniciar el cronometro con el boton iniciar, este se desabilita y cambia el texto a iniciado
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
        // Inicia un intervalo que llama a la función updateTimer cada segundo (1000 ms) que es equivalente a un segundo
        timer = setInterval(updateTimer, 1000);
    }
}

// Función para detener el cronometro
function stopTimer() {
    if (running) {
        running = false;
        if (startButton.innerText !== 'Reanudar') {
            startButton.innerText = 'Reanudar';
        }
        startButton.disabled = false;
        stopButton.disabled = true;
        // Detiene el intervalo de actualización del cronometro
        clearInterval(timer);
    }
}

// Función para reiniciar el cronometro
function resetTimer() {
    // Llama a la función stopTimer para asegurarse de que el cronometro esté detenido
    stopTimer();
    // Reinicia las variables de tiempo (segundos, minutos y horas) a cero
    seconds = 0;
    minutes = 0;
    hours = 0;
    // Actualiza el elemento HTML 'display' para mostrar '00:00:00'
    display.innerText = '00:00:00';
    // Cambia el texto del botón a "Iniciar" ya que estamos reiniciando
    startButton.innerText = 'Iniciar';
    // Desactiva el botón de reinicio
    resetButton.disabled = true;
}


// Función para actualizar el cronometro cada segundo
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    // Formatea el tiempo en formato HH:MM:SS y actualiza el elemento HTML 'display' y este se asegura para que el cronometro contenga almenos dos numeros mientras se va actualizando.
    const displayText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    display.innerText = displayText;
}

// Agrega event listeners a los botones para que ejecuten las funciones correspondientes cuando se hacen clic en ellos
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);