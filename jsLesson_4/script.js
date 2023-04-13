/*
Напишіть програму, яка приймає від користувача вартість
товару та виводить відповідне повідомлення про те, який
податок треба сплатити (5% або 10%).
*/

let text1 = document.getElementById("text1");
let result1 = document.getElementById("result1");

document.getElementById("check_button1")
    .addEventListener("click", () => {
        let price = text1.value;
        switch (true) {
            case (price < 0 || isNaN(price)):
                result1.innerHTML = "Ви ввели невірну вартість товару!";
                break;
            default:
                let tax = price < 1000 ? 0.05 : 0.1;
                let taxAmount = price * tax;
                let totalAmount = parseFloat(price) + parseFloat(taxAmount);
                result1.innerHTML = `Вартість товару: ${price} грн. Податок: ${tax * 100}% (${taxAmount} грн.) Загальна вартість: ${totalAmount} грн.`;
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка приймає від користувача номер місяця
та виводить повідомлення про те, чи є цей місяць весняним,
літнім, осіннім або зимовим.
*/

let text2 = document.getElementById("text2");
let result2 = document.getElementById("result2");

document.getElementById("check_button2")
    .addEventListener("click", () => {
        switch (Number(text2.value)) {
            case 12:
            case 1:
            case 2:
                result2.innerHTML = "Зима";
                break;
            case 3:
            case 4:
            case 5:
                result2.innerHTML = "Весна";
                break;
            case 6:
            case 7:
            case 8:
                result2.innerHTML = "Літо";
                break;
            case 9:
            case 10:
            case 11:
                result2.innerHTML = "Осінь";
                break;
            default:
                result2.innerHTML = "Невірний номер місяця";
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка приймає від користувача номер дня
тижня та виводить відповідне повідомлення про те, чи є цей
день вихідним чи робочим.
*/

let text3 = document.getElementById("text3");
let result3 = document.getElementById("result3");

document.getElementById("check_button3")
    .addEventListener("click", () => {
        switch (text3.value) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
                result3.innerHTML = "Це робочий день";
                break;
            case "6":
            case "7":
                result3.innerHTML = "Це вихідний день";
                break;
            default:
                result3.innerHTML = "Невірно введений номер дня тижня";
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка приймає від користувача вік та
виводить відповідне повідомлення про те, чи може користувач
голосувати на виборах (18 років та старше) або ні.
*/

let text4 = document.getElementById("text4");
let result4 = document.getElementById("result4");

document.getElementById("check_button4")
    .addEventListener("click", () => {
        switch (true) {
            case text4.value >= 18:
                result4.innerHTML = "Ви можете голосувати на виборах!";
                break;
            default:
                result4.innerHTML = "На жаль, ви ще не можете голосувати на виборах.";
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка приймає від користувача назву місяця
та виводить відповідне повідомлення про те, чи є цей місяць
місяцем з непарною кількістю днів.
*/

let text5 = document.getElementById("text5");
let result5 = document.getElementById("result5");

document.getElementById("result5");
document.getElementById("check_button5")
    .addEventListener("click", () => {
        let month = text5.value;
        switch (month.toLowerCase()) {
            case "січень":
            case "березень":
            case "травень":
            case "липень":
            case "серпень":
            case "жовтень":
            case "грудень":
                result5.innerHTML = "У цьому місяці непарна кількість днів!";
                break;
            case "лютий":
                result5.innerHTML = "У лютому залежно від року може бути 28 або 29 днів.";
                break;
            case "квітень":
            case "червень":
            case "вересень":
            case "листопад":
                result5.innerHTML = "У цьому місяці парна кількість днів.";
                break;
            default:
                result5.innerHTML = "Введено невірну назву місяця!";
                break;
        }
    });

/* ------------------------------------------------------------------ Тернарні оператори */

/*
Перевірити, чи є число парним та вивести "Парне", якщо воно
є парним, та "Непарне", якщо воно є непарним.
*/

let text6 = document.getElementById("text6");
let result6 = document.getElementById("result6");

document.getElementById("check_button6")
    .addEventListener("click", () => {
        let number = text6.value;
        result6.innerHTML = (number % 2 === 0) ? "Парне" : "Непарне";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є рядок пустим та вивести "Пустий", якщо він є
пустим, та "Не пустий", якщо він не є пустим.
*/

let text7 = document.getElementById("text7");
let result7 = document.getElementById("result7");

document.getElementById("check_button7")
    .addEventListener("click", () => {
        let str = text7.value;
        result7.innerHTML = (str === "") ? "Пустий" : "Не пустий";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи містить рядок певний символ та вивести
"Містить символ", якщо він містить символ, та "Не містить
символ", якщо він не містить символ.
*/

let text8 = document.getElementById("text8");
let text8_symbol = document.getElementById("text8_symbol");
let result8 = document.getElementById("result8");

document.getElementById("check_button8")
    .addEventListener("click", () => {
        let str = text8.value.toLowerCase();
        let char = text8_symbol.value;
        result8.innerHTML = (str.includes(char)) ? "Містить символ" : "Не містить символ";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є масив порожнім та вивести "Порожній", якщо
він є порожнім, та "Не порожній", якщо він не є порожнім.
*/

let text9 = document.getElementById("text9");
let result9 = document.getElementById("result9");

document.getElementById("check_button9")
    .addEventListener("click", () => {
        let arr = [];
        result9.innerHTML = (arr.length === 0) ? "Порожній" : "Не порожній";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є елемент масиву ненульовим та вивести
"Ненульовий елемент", якщо він є ненульовим, та "Нульовий
елемент", якщо він є нульовим.
*/

let text10 = document.getElementById("text10");
let text10_index = document.getElementById("text10_index");
let result10 = document.getElementById("result10");

let arr = [0, 5, 10, 0, 15];
text10.value = arr.join(", ");

document.getElementById("check_button10")
    .addEventListener("click", () => {
        let index = text10_index.value;
        result10.innerHTML = arr[index] !== 0 ? "Ненульовий елемент" : "Нульовий елемент";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є значення змінної в межах від 0 до 1 включно
та вивести "Відповідає критеріям", якщо воно відповідає цим
критеріям, та "Не відповідає критеріям", якщо воно не
відповідає цим критеріям.
*/

let text11 = document.getElementById("text11");
let result11 = document.getElementById("result11");

document.getElementById("check_button11")
    .addEventListener("click", () => {
        let variable = text11.value;
        result11.innerHTML = (variable >= 0 && variable <= 1) ? "Відповідає критеріям" : "Не відповідає критеріям";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є дата в межах від 1 січня 2022 до 31 грудня
2022 включно та вивести "Відповідає критеріям", якщо вона
відповідає цим критеріям, та "Не відповідає критеріям", якщо
вона не відповідає цим критеріям.
*/

let text12 = document.getElementById("text12");
let result12 = document.getElementById("result12");
let start = new Date(2022, 0, 1);
let end = new Date(2022, 11, 31);

document.getElementById("check_button12")
    .addEventListener("click", () => {
        result12.innerHTML = (text12.value >= start && text12.value <= end) ? "Відповідає критеріям" : "Не відповідає критеріям";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є вік користувача понад 18 та вивести
"Дорослий", якщо він є дорослим, та "Неповнолітній", якщо він
є неповнолітнім.
*/

let text13 = document.getElementById("text13");
let result13 = document.getElementById("result13");

document.getElementById("check_button13")
    .addEventListener("click", () => {
        let age = text13.value;
        result13.innerHTML = (age >= 18) ? "Дорослий" : "Неповнолітній";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є рядок довшим за 10 символів та вивести
"Довгий рядок", якщо він є довгим.
*/

let text14 = document.getElementById("text14");
let result14 = document.getElementById("result14");

document.getElementById("check_button14")
    .addEventListener("click", () => {
        let str = text14.value;
        result14.innerHTML = (str.length > 10) ? "Довгий рядок" : "";
    });

/* ------------------------------------------------------------------ */

/*
Перевірити, чи є введене слово анаграмою (слово, яке можна
утворити з літер іншого слова), та вивести "Анаграма", якщо
воно є анаграмою, та "Не анаграма", якщо воно не є
анаграмою.
*/

let text15 = document.getElementById("text15");
let text15_2 = document.getElementById("text15_2");
let result15 = document.getElementById("result15");

document.getElementById("check_button15")
    .addEventListener("click", () => {
        let word1 = text15.value;
        let word2 = text15_2.value;

        let sortedWord1 = word1.toLowerCase().split('').sort().join('');
        let sortedWord2 = word2.toLowerCase().split('').sort().join('');

        result15.innerHTML = (sortedWord1 === sortedWord2) ? "Анаграма" : "Не анаграма";
    });