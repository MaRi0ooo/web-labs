let num1 = document.getElementById("is_even")
let button1 = document.getElementById("check_is_even")
let span1 = document.getElementById("result1")

button1.addEventListener("click", () => {
    switch (num1.value % 2) {
        case 0:
            span1.innerHTML = `${num1.value} є парним числом`
            break;
        case 1:
            span1.innerHTML = `${num1.value} є непарним числом`
            break;
        default:
            span1.innerHTML = "Введене значення не є числом"
    }
})

//--2--////////////////////////////////////////////////////////////////

let num2 = document.getElementById("grade")
let button2 = document.getElementById("check_grade")
let span2 = document.getElementById("result2")

button2.addEventListener("click", () => {
    switch (num2.value) {
        case (num2.value < 60):
            span2.innerHTML = "Студент не отримав залік"
            break;
        case (num2.value >= 60 && num2.value <= 74):
            span2.innerHTML = "Студент отримав залік на достатньо"
            break;
        case (num2.value >= 75 && num2.value <= 89):
            span2.innerHTML = "Студент отримав залік на добре"
            break;
        case (num2.value >= 90 && num2.value <= 100):
            span2.innerHTML = "Студент отримав залік на відмінно"
            break;
        default:
            span2.innerHTML = "Введено некоректну оцінку"
            break;
    }
})

//--3--////////////////////////////////////////////////////////////////

let num3 = document.getElementById("month")
let button3 = document.getElementById("check_month")
let span3 = document.getElementById("result3")

button3.addEventListener("click", () => {
    let season
    if (num3.value >= 1 && num3.value <= 12) {
        switch (num3.value) {
            case "12":
            case "1":
            case "2":
                season = "зима"
                break;
            case "3":
            case "4":
            case "5":
                season = "весна"
                break;
            case "6":
            case "7":
            case "8":
                season = "літо"
                break;
            case "9":
            case "10":
            case "11":
                season = "осінь"
                break;
        }
    } else {
        span3.innerHTML = "Неправильний номер місяця"
    }
    span3.innerHTML = "Сезон року: " + season
})

//--4--////////////////////////////////////////////////////////////////

let text = document.getElementById("letter")
let button4 = document.getElementById("check_letter")
let span4 = document.getElementById("result4")

button4.addEventListener("click", () => {
    switch (text.value.toLowerCase()) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "h":
        case "i":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "o":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            span4.innerHTML = "Це літера англійського алфавіту."
            break;
        default:
            span4.innerHTML = "Це не літера англійського алфавіту."
    }
})

//--5--////////////////////////////////////////////////////////////////

let num5 = document.getElementById("week")
let button5 = document.getElementById("check_week")
let span5 = document.getElementById("result5")

button5.addEventListener("click", () => {
    let dayName;
    switch (num5.value) {
        case "1": dayName = "Понеділок"; break;
        case "2": dayName = "Вівторок"; break;
        case "3": dayName = "Середа"; break;
        case "4": dayName = "Четвер"; break;
        case "5": dayName = "П'ятниця"; break;
        case "6": dayName = "Субота"; break;
        case "7": dayName = "Неділя"; break;
        default: dayName = "Неправильний номер дня";
    }
    span5.innerHTML = "День тижня: " + dayName
})

//--6--////////////////////////////////////////////////////////////////

let num6 = document.getElementById("lang")
let button6 = document.getElementById("check_moth_lang")
let span6 = document.getElementById("result6")

button6.addEventListener("click", () => {
    let monthName;
    switch (num6.value) {
        case "1": monthName = { ua: "Січень", eng: "January", pol: "Styczeń" }; break;
        case "2": monthName = { ua: "Лютий", eng: "February", pol: "Luty" }; break;
        case "3": monthName = { ua: "Березень", eng: "March", pol: "Marzec" }; break;
        case "4": monthName = { ua: "Квітень", eng: "April", pol: "Kwiecień" }; break;
        case "5": monthName = { ua: "Травень", eng: "May", pol: "Maj" }; break;
        case "6": monthName = { ua: "Червень", eng: "June", pol: "Czerwiec" }; break;
        case "7": monthName = { ua: "Липень", eng: "July", pol: "Lipiec" }; break;
        case "8": monthName = { ua: "Серпень", eng: "August", pol: "Sierpień" }; break;
        case "9": monthName = { ua: "Вересень", eng: "September", pol: "Wrzesień" }; break;
        case "10": monthName = { ua: "Жовтень", eng: "October", pol: "Październik" }; break;
        case "11": monthName = { ua: "Листопад", eng: "November", pol: "Listopad" }; break;
        case "12": monthName = { ua: "Грудень", eng: "December", pol: "Grudzień" }; break;
        default: monthName = { ua: "Невірний номер місяця", eng: "Invalid month number", pol: "Неправильный номер месяца" };
    }
    span6.innerHTML = `Назва місяця: 
    українською - ${monthName.ua}, 
    англійською - ${monthName.eng}, 
    польською - ${monthName.pol}`
})