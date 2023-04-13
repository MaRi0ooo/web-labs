let age = document.getElementById("age")
let button1 = document.getElementById("check_age")
let span1 = document.getElementById("result1")

function checkAge() {
    if(age.value >= 18) {
        span1.innerHTML = "Користувач є повнолітнім"
    }
    else {
        span1.innerHTML = "Користувач є неповнолітнім"
    }
}
button1.addEventListener("click", checkAge)

//--2--////////////////////////////////////////////////////////////////

let digit = document.getElementById("digit")
let button2 = document.getElementById("check_is_digit")
let span2 = document.getElementById("result2")

function isDigit() {
    if(isNaN(digit.value)) {
        span2.innerHTML = "Введене значення не є числом"
    }
    else {
        span2.innerHTML = "Введене значення є числом"
    }
}
button2.addEventListener("click", isDigit)

//--3--////////////////////////////////////////////////////////////////

let time = document.getElementById("date_time")
let button3 = document.getElementById("check_date_time")
let span3 = document.getElementById("result3")

function dateTime() {
    if (time.value >= 5 && time.value < 12) {
        span3.innerHTML = "Доброго ранку!"
    } else if (time.value >= 12 && time.value < 18) {
        span3.innerHTML = "Доброго дня!"
    } else if (time.value >= 18 && time.value < 24) {
        span3.innerHTML = "Доброго вечора!"
    } else {
        span3.innerHTML = "Доброї ночі!"
    }
}
button3.addEventListener("click", dateTime)

//--4--////////////////////////////////////////////////////////////////

let numberPlus = document.getElementById("number_plus_range")
let button4 = document.getElementById("check_plus_range")
let span4 = document.getElementById("result4")

function isInPlusRange() {
    if (numberPlus.value >= 10 && numberPlus.value <= 100) {
        span4.innerHTML = `Число ${numberPlus.value} належить діапазону від 10 до 100 включно.`
    } else {
        span4.innerHTML = `Число ${numberPlus.value} НЕ належить діапазону від 10 до 100 включно.`
    }
}
button4.addEventListener("click", isInPlusRange)

//--5--////////////////////////////////////////////////////////////////

let numberMinus = document.getElementById("number_minus_range")
let button5 = document.getElementById("check_minus_range")
let span5 = document.getElementById("result5")

function isInMinusRange() {
    if (numberMinus.value >= -50 && numberMinus.value <= -10) {
        span5.innerHTML = `Число ${numberMinus.value} належить діапазону -50 до -10 включно.`
    } else {
        span5.innerHTML = `Число ${numberMinus.value} НЕ належить діапазону -50 до -10 включно.`
    }
}
button5.addEventListener("click", isInMinusRange)

//--6--////////////////////////////////////////////////////////////////

let year = document.getElementById("year")
let button6 = document.getElementById("check_year")
let span6 = document.getElementById("result6")

function isLeapYear() {
    if (year.value % 4 === 0 && (year.value % 100 !== 0 || year.value % 400 === 0)) {
        span6.innerHTML = `${year.value} рік є високосним.`
    } else {
        span6.innerHTML = `${year.value} рік не є високосним.`
    }
}
button6.addEventListener("click", isLeapYear)

//--7--////////////////////////////////////////////////////////////////

let riadok = document.getElementById("riadok")
let button7 = document.getElementById("check_riadok")
let span7 = document.getElementById("result7")

function isRiadok() {
    if(isNaN(parseInt(riadok.value))) {
        span7.innerHTML = "Тільки букви"
    }
    else {
        span7.innerHTML = "Не тільки букви"
    }
}
button7.addEventListener("click", isRiadok)

//--8--////////////////////////////////////////////////////////////////

let num = document.getElementById("value")
let button8 = document.getElementById("check_digit")
let span8 = document.getElementById("result8")

function isEven() {
    if (num.value % 2 === 0) {
        span8.innerHTML = `Число ${num.value} є парним`
    } else {
        span8.innerHTML = `Число ${num.value} не є парним`
    }
}
button8.addEventListener("click", isEven)

//--9--////////////////////////////////////////////////////////////////

let list = document.getElementById("number_list")
let button9 = document.getElementById("check_list")
let span9 = document.getElementById("result9")

function isInclude() {
    if(list.value == 2 || list.value == 3 || list.value == 4) {
        span9.innerHTML = "Значення дозволено"
    } else {
        span9.innerHTML = "Значення не дозволено"
    }
}
button9.addEventListener("click", isInclude)

//--10--////////////////////////////////////////////////////////////////

let simple = document.getElementById("simple")
let button10 = document.getElementById("check_simple")
let span10 = document.getElementById("result10")

function isSimple() {
    let isPrime = true

    for(let i = 2; i < simple.value; i++) {
        if(simple.value % i === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        span10.innerHTML = `${simple.value} є простим числом`
    } else {
        span10.innerHTML = `${simple.value} не є простим числом`
    }
}
button10.addEventListener("click", isSimple)

////////////////////////////////////////////////////////////////////////

