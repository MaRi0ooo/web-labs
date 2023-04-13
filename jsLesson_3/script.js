/*
Напишіть програму, яка залежно від введеної користувачем літери виводить на
екран відповідну інформацію про день тижня, на який припадає ця літера
(наприклад, якщо введено "M", то на екрані повинно вивестися "Monday -
Понеділок").
*/

let text1 = document.getElementById("text1");
let result1 = document.getElementById("result1");

document.getElementById("check_button1")
    .addEventListener("click", () => {
        switch (text1.value.toLowerCase()) {
            case 'm':
                result1.innerHTML = "Monday - Понеділок";
                break;
            case 't':
                result1.innerHTML = "Tuesday - Вівторок";
                break;
            case 'w':
                result1.innerHTML = "Wednesday - Середа";
                break;
            case 'th':
                result1.innerHTML = "Thursday - Четвер";
                break;
            case 'f':
                result1.innerHTML = "Friday - П'ятниця";
                break;
            case 's':
                result1.innerHTML = "Saturday - Субота";
                break;
            case 'su':
                result1.innerHTML = "Sunday - Неділя";
                break;
            default:
                result1.innerHTML = "Введено некоректну літеру.";
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка переводить введене користувачем число в римський
запис. Наприклад, якщо введено число 4, то на екрані повинен вивестися рядок
"IV".
*/

let text2 = document.getElementById("text2");
let result2 = document.getElementById("result2");
const romanNumerals = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9, numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"}
];

document.getElementById("check_button2")
    .addEventListener("click", () => {
        let roman = "";
        for (let i = 0; i < romanNumerals.length; i++) {
            while (text2.value >= romanNumerals[i].value) {
                roman += romanNumerals[i].numeral;
                text2.value -= romanNumerals[i].value;
            }
        }
        result2.innerHTML = roman;
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем коду кольору
виводить на екран назву цього кольору (наприклад, якщо введено код #FF0000,
то на екрані повинно вивестися "Red - Червоний").
*/

let text3 = document.getElementById("text3");
let result3 = document.getElementById("result3");

document.getElementById("check_button3")
    .addEventListener("click", () => {
        let colorName;
        switch (text3.value) {
            case "#FF0000":
                colorName = "Червоний";
                break;
            case "#00FF00":
                colorName = "Зелений";
                break;
            case "#0000FF":
                colorName = "Синій";
                break;
            case "#FFFF00":
                colorName = "Жовтий";
                break;
            case "#FFC0CB":
                colorName = "Рожевий";
                break;
            case "#800080":
                colorName = "Фіолетовий";
                break;
            case "#FFFFFF":
                colorName = "Білий";
                break;
            case "#000000":
                colorName = "Чорний";
                break;
            default:
                colorName = "Невідомий";
                break;
        }
        result3.innerHTML = colorName;
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем числа виводить на
екран назву відповідної геометричної фігури (наприклад, якщо введено число 3,
то на екрані повинно вивестися "Triangle - Трикутник").
*/

let text4 = document.getElementById("text4");
let result4 = document.getElementById("result4");

document.getElementById("check_button4")
    .addEventListener("click", () => {
        let shapeName;
        switch (Number(text4.value)) {
            case 1:
                shapeName = "Коло";
                break;
            case 2:
                shapeName = "Прямокутник";
                break;
            case 3:
                shapeName = "Трикутник";
                break;
            case 4:
                shapeName = "Квадрат";
                break;
            case 5:
                shapeName = "П'ятикутник";
                break;
            default:
                shapeName = "Невідома фігура";
                break;
        }
        result4.innerHTML = shapeName;
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем місяця виводить
на екран кількість днів у цьому місяці.
*/

let text5 = document.getElementById("text5");
let result5 = document.getElementById("result5");

document.getElementById("result5");
document.getElementById("check_button5")
    .addEventListener("click", () => {
        let daysInMonth;
        switch (text5.value.toLowerCase()) {
            case "січень":
            case "березень":
            case "травень":
            case "липень":
            case "серпень":
            case "жовтень":
            case "грудень":
                daysInMonth = 31;
                break;
            case "квітень":
            case "червень":
            case "вересень":
            case "листопад":
                daysInMonth = 30;
                break;
            case "лютий":
                daysInMonth = "28 або 29";
                break;
            default:
                daysInMonth = "Невідомий місяць";
                break;
        }
        result5.innerHTML = `У ${text5.value} ${daysInMonth} днів.`;
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем знаку зодіаку
виводить на екран відповідну характеристику людини, яка народилася під цим
знаком.
*/

let text6 = document.getElementById("text6");
let result6 = document.getElementById("result6");

document.getElementById("check_button6")
    .addEventListener("click", () => {
        let zodiac;
        switch(text6.value.toLowerCase()) {
            case "овен":
                zodiac = "Овен - людина енергійна та наполеглива, здатна до досягнення великих результатів.";
                break;
            case "телець":
                zodiac = "Телець - людина стійка та надійна, здатна до досягнення стабільності та успіху.";
                break;
            case "близнюки":
                zodiac = "Близнюки - людина кмітлива та комунікабельна, здатна до швидкого засвоєння нової інформації.";
                break;
            case "рак":
                zodiac = "Рак - людина чутлива та емоційна, здатна до виявлення розуміння та турботи про інших.";
                break;
            case "лев":
                zodiac = "Лев - людина творча та сповнена енергії, здатна до розвитку свого потенціалу та здібностей.";
                break;
            case "діва":
                zodiac = "Діва - людина організована та дисциплінована, здатна до досягнення високих результатів завдяки своїй старанності.";
                break;
            case "ваги":
                zodiac = "Ваги - людина збалансована та гармонійна, здатна до досягнення згоди та співпраці з оточуючими.";
                break;
            case "скорпіон":
                zodiac = "Скорпіон - людина прониклива та енергійна, здатна до досягнення своїх цілей навіть у складних ситуаціях.";
                break;
            case "стрілець":
                zodiac = "Стрілець - людина енергійна та незалежна, здатна до досягнення своїх мрій та цілей, які вона ставить перед собою.";
                break;
        }
        result6.innerHTML = zodiac;
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем рівня освіти
виводить на екран максимальну зарплату, яку можна отримати за рік
(наприклад, якщо рівень освіти "бакалавр", то на екрані повинно вивестися "40
000 доларів").
*/

let text7 = document.getElementById("text7");
let result7 = document.getElementById("result7");

document.getElementById("check_button7")
    .addEventListener("click", () => {
        switch (text7.value) {
            case "Середня школа":
                result7.innerHTML = "Максимальна зарплата за рік: 20 000 доларів";
                break;
            case "Бакалавр":
                result7.innerHTML = "Максимальна зарплата за рік: 40 000 доларів";
                break;
            case "Магістр":
                result7.innerHTML = "Максимальна зарплата за рік: 60 000 доларів";
                break;
            case "Докторська":
                result7.innerHTML = "Максимальна зарплата за рік: 80 000 доларів";
                break;
            default:
                result7.innerHTML = "Ви ввели невірний рівень освіти!";
                break;
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем номера місяця
виводить на екран пору року, до якої цей місяць належить (наприклад, якщо
введено номер 8, то на екрані повинно вивестися "Summer - Літо").
*/

let text8 = document.getElementById("text8");
let result8 = document.getElementById("result8");

document.getElementById("check_button8")
    .addEventListener("click", () => {
        if (text8.value >= 3 && text8.value <= 5) {
            result8.innerHTML = "Spring - Весна";
        } else if (text8.value >= 6 && text8.value <= 8) {
            result8.innerHTML = "Summer - Літо";
        } else if (text8.value >= 9 && text8.value <= 11) {
            result8.innerHTML = "Autumn - Осінь";
        } else {
            result8.innerHTML = "Winter - Зима";
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем дня тижня
виводить на екран чи це робочий день, чи вихідний.
*/

let text9 = document.getElementById("text9");
let result9 = document.getElementById("result9");

document.getElementById("check_button9")
    .addEventListener("click", () => {
        if (text9.value >= 1 && text9.value <= 5) {
            result9.innerHTML = "Weekday - Робочий день";
        } else if (text9.value == 6 || text9.value == 7) {
            result9.innerHTML = "Weekend - Вихідний";
        } else {
            result9.innerHTML = "Invalid input - Неправильне значення";
        }
    });

/* ------------------------------------------------------------------ */

/*
Напишіть програму, яка залежно від введеного користувачем числа виводить на
екран, чи це парне, чи непарне число.
*/

let text10 = document.getElementById("text10");
let result10 = document.getElementById("result10");

document.getElementById("check_button10")
    .addEventListener("click", () => {
        if (text10.value % 2 === 0) {
            result10.innerHTML = text10.value + " - парне число";
        } else {
            result10.innerHTML = text10.value + " - непарне число";
        }
    });