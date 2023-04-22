/*
    1. Створіть власну функцію, яка додає до тексту градієнтний ефект, змінюючи
    значення стилів CSS для background-image.
*/
function changeGradient(text) {
    text.style.backgroundImage = `linear-gradient(
        to right, 
        rgb(${Math.random() * 255}, 
        ${Math.random() * 255}, 
        ${Math.random() * 255}), 
        rgb(${Math.random() * 255}, 
        ${Math.random() * 255}, 
        ${Math.random() * 255}
    ))`;
}
document.getElementById("button1").addEventListener("click", () => {
    changeGradient(document.getElementById("span1"));
});

/*
    3. Створіть функцію, яка додає до тексту ефект "розтягнутості", змінюючи значення
    стилів CSS для text-stretch.
*/
function addTextStretchEffect(text) {
    text.style.textStretch = "ultra-expanded";
}
document.getElementById("button2").addEventListener("click", () => {
    addTextStretchEffect(document.getElementById("span2"));
});

/*
    4. Змініть функцію зміни кольору переднього плану так, щоб вона приймала
    значення HEX-коду кольору з зовнішнього джерела, наприклад, з форми
    введення.
*/
function changeTextColorHex(hexColor) {
    document.getElementById("span3").style.color = hexColor;
}
document.getElementById("button3").addEventListener("click", () => {
    const hexColor = document.getElementById("color-input").value;
    changeTextColorHex(hexColor);
});

/*
    6. Змініть функцію зміни кольору переднього плану так, щоб вона дозволяла
    вибирати кольори з палітри кольорів, що відображається на сторінці.
*/
document.getElementById("color-picker").addEventListener("input", () => {
    document.getElementById("span4").style.color = document.getElementById("color-picker").value;
});

/*
    7. Створіть функцію, яка збільшує розмір тексту при кожному натисканні кнопки
    "збільшити", і зменшує його при кожному натисканні кнопки "зменшити".
*/
let fontSize = 16;
document.getElementById("button-plus").addEventListener("click", () => {
    fontSize += 2;
    document.getElementById("span5").style.fontSize = `${fontSize}px`;
});
document.getElementById("button-minus").addEventListener("click", () => {
    fontSize -= 2;
    document.getElementById("span5").style.fontSize = `${fontSize}px`;
});
