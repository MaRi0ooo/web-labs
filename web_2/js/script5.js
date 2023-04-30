function generateSequence(length) {
    let sequence = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * 26);
        sequence += String.fromCharCode(65 + randomIndex); // A = 65
    }
    return sequence;
}

let sequence = generateSequence(5);
let h1 = document.getElementById("h1");

h1.innerHTML = sequence;
let pressedKeys = [];

function checkSequence() {
    if (pressedKeys.every((key, index) => key === sequence[index])) {
        alert('Вітаємо! Ви ввели правильну послідовність клавіш.');
        sequence = generateSequence(5);
        h1.innerHTML = sequence;
    } else {
        alert('Ви ввели неправильну послідовність клавіш. Гра закінчена.');
        sequence = generateSequence(5);
        h1.innerHTML = sequence;
    }
    pressedKeys = [];
}

document.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase();
    pressedKeys.push(key);
    if (pressedKeys.length === sequence.length) {
        checkSequence();
    }
});