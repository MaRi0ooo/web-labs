/*
// Звичайні змінні
let x = 5
var y = 5

// Статична змінна
const z = 5
*/

/* Ввод і приведення типів
let x = Number(prompt("Enter num: "))
alert(typeof x)
alert(x)
 */

/*
// let a = 5
// let b = "5"

// alert(a > b)
// alert(a < b)
// alert(a >= b)
// alert(a <= b)

// alert(a == b) // порівняння по вмісту змінних
// alert(a === b) // + порівняння типів даних та вмісту
// alert(a != b)
// alert(a !== b)

// 1
// let x = 5
// let y = 10
// alert(x < y)
// alert(x === y)

// // 2
// let a = 2
// let b = 3
// let c = 5
// alert(a + b === c)

// // 3
// let age = 18
// alert(typeof age === "number" && age === 18)

// // 4
// let user_name = "Vitalik"
// let password = "123321"
// alert(user_name && password)

// // 5
// let X = true
// alert(typeof x === "boolean")

// // 6
// let A = 1
// let B = 4
// alert(A !== B)

// // 7
// let _x = 5
// let _y = "5"
// alert(_x != _y)

// // 8
// let _a = 5
// let _b = 10
// let _c = 20
// alert(a + b < c)

// // 9
// let _A = 5
// let _B = 10
// alert(_A !== 0 && _B !== 0)

// // 10
// let x = null
// alert(x === null)

// // 11
// let a = "mama myla ramy"
// alert(typeof a !== "number")

// // 12
// let user_name = "val_or_ant"
// let password = ""
// alert(user_name === "" || password === "")

// // 13
// let _a = 10
// let _b = 20
// alert(_a <= _b)

// // 14
// let A = NaN;
// alert(A == NaN)

// // 15
// let variable = "25"
// alert(Number(variable) && typeof variable === "string")
 */

/*
// 1
let num1 = Number(prompt("Enter num1:"))
let num2 = Number(prompt("Enter num2:"))

let sum = num1 + num2
let difff = num1 - num2
let mult = num1 * num2
let div = num1 / num2

alert(`Sum: ${sum}\n Diff: ${difff}\n Mult: ${mult}\n Div: ${div}`)

// 2
let num3 = Number(prompt("Enter num1:"))
let num4 = Number(prompt("Enter num2:"))
let num5 = Number(prompt("Enter num3:"))

let average = (num3 + num4 + num5) / 3
let geometric = Math.pow(num1 * num2 * num3, 1 / 3)

alert(`Average: ${average}\n Geometric ${geometric}`)

// 3
let R = Number(prompt("Enter radius:"))

let lengthCircle = 2 * Math.PI * R;
let area = Math.PI * R * R

alert(`Length circle with radius ${R} = ${lengthCircle}`)
alert(`Area of circle with radius ${R} = ${area}`)

// 4
let width = Number(prompt("Enter width:"))
let height = Number(prompt("Enter height:"))

let perimeter = 2 * (width + height)
let areaRectangle = width * height;

alert(`Perimeter: ${perimeter}\n Area: ${areaRectangle}`)

// 5
let num6 = Number(prompt("Enter num1:"))
let num7 = Number(prompt("Enter num2:"))

let avg = (num6 + num7) / 2
let diff = Math.abs(num6 - num7)

alert(`Average: ${avg}\n ABS: ${diff}`)
*/
// 6
let num1 = Number(prompt("Enter num1:"))
let num2 = Number(prompt("Enter num2:"))
let num3 = Number(prompt("Enter num3:"))

let perimeter = (num1 + num2 + num3) / 2
let areaTriangle =  Math.sqrt(perimeter*(perimeter-num1)*(perimeter-num2)*(perimeter-num3))

alert(`Area: ${areaTriangle}`)

// 7

// 8
let leg1 = Number("Enter length of leg1:")
let leg2 = Number("Enter length of leg2:")

let result = Math.sqrt(leg1**2 + leg2**2)
alert(`The hypotenuse of the triangle with legs ${leg1} and ${leg2} is equal to ${result}`)

// 9
let a = Number(prompt("Enter length a:"))
let b = Number(prompt("Enter length b:"))
let c = Number(prompt("Enter length c:"))

if(a === b && b === c) {
    alert("The triangle is equilateral") // Рівносторонній
}
else if(a === b || b === c || c === a) {
    alert("The triangle is isosceles") // Рівнобедрений
}
else {
    alert("Triangle of free type") // Довільного типу
}

// 10
let num4 = Number(prompt("Enter num1"))
let num5 = Number(prompt("Enter num2"))

if(num4 >= 0 && num5 >= 0) {
    let sum = num4 + num5
    alert(`Sum ${sum}`)
}
else if(num4 < 0 && num5 < 0) {
    let diff = num4 - num5
    alert(`Diff ${diff}`)
}




