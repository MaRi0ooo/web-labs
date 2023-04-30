let body = document.getElementById("body");

let audio = new Audio("../tunes/giga_papa.mp3");
audio.volume = 1;

document.addEventListener("keydown", (e) => {
    if (e.key === '1') {
        body.style.backgroundImage = "url('../img/giga1.jpg')";
        body.style.backgroundSize = "cover";
        audio.play();
    }
    else if (e.key === '2') {
        body.style.backgroundImage = "url('../img/giga2.jpg')";
        body.style.backgroundSize = "cover";
        audio.play();
    }
});