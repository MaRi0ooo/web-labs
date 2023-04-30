const body = document.getElementById("body");
const combinations = document.getElementById("combinations");

let rPressed = false;
let gPressed = false;
let bPressed = false;

body.style.transition = "background-color 2s ease-in-out";
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'r':
            rPressed = true;
            break;
        case 'g':
            gPressed = true;
            break;
        case 'b':
            bPressed = true;
            break;
    }

    switch (true) {
        case rPressed && gPressed && bPressed:
            body.style.backgroundColor = "white";
            combinations.innerHTML = "Red, green, and blue - White";
            break;
        case rPressed && gPressed:
            body.style.backgroundColor = "yellow";
            combinations.innerHTML = "Red and green - Yellow";
            break;
        case rPressed && bPressed:
            body.style.backgroundColor = "magenta";
            combinations.innerHTML = "Red and blue - Magenta";
            break;
        case gPressed && bPressed:
            body.style.backgroundColor = "cyan";
            combinations.innerHTML = "Green and blue - Cyan";
            break;
        case rPressed:
            body.style.backgroundColor = "red";
            combinations.innerHTML = "Red";
            break;
        case gPressed:
            body.style.backgroundColor = "green";
            combinations.innerHTML = "Green";
            break;
        case bPressed:
            body.style.backgroundColor = "blue";
            combinations.innerHTML = "Blue";
            break;
    }
});

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'r':
            rPressed = false;
            break;
        case 'g':
            gPressed = false;
            break;
        case 'b':
            bPressed = false;
            break;
    }
});