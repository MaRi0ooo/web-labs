/*
    1.Напишіть функцію, яка приймає масив чисел та повертає новий масив,
    який складається з чисел, які знаходяться на парних індексах у вихідному масиві.
*/
console.log("Task [1]");
function getEvenIndexedElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}
console.log(getEvenIndexedElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
    2. Напишіть функцію, яка приймає масив об'єктів та повертає новий масив,
    який містить тільки ті об'єкти, у яких властивість "name" містить рядок "John".
*/
console.log("\nTask [2]");
function getJohnObjects(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === 'John') {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getJohnObjects([
    {
        name: 'John',
        age: 25
    },
    {
        name: "Alice",
        age: 18
    },
    {
        name: 'John',
        age: 14
    }
]));

/*
    3. Напишіть функцію, яка приймає масив чисел та повертає новий масив,
    який містить тільки унікальні числа.
*/
console.log("\nTask [3]");
function getUniqueNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getUniqueNumbers([1, 2, 3, 2, 4, 3, 5, 6, 5, 4]));

/*
    4. Напишіть функцію, яка приймає масив об'єктів та повертає новий масив,
    який містить тільки ті об'єкти, у яких властивість "age" більша за 18.
*/
console.log("\nTask [4]");
function getObjectsOver18(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 18) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getObjectsOver18([
    {
        name: 'John',
        age: 25
    },
    {
        name: "Alice",
        age: 18
    },
    {
        name: 'John',
        age: 14
    }
]));

/*
    5. Напишіть функцію, яка приймає масив чисел та повертає новий масив,
    який містить всі числа з вихідного масиву, окрім мінімального та максимального значення.
*/
console.log("\nTask [5]");
function getNumbersWithoutMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min && arr[i] !== max) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getNumbersWithoutMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
    6. Напишіть функцію, яка приймає масив рядків та повертає новий масив,
    у якому кожен рядок замінений на рядок з першої літери великої та решти малих літер.
*/
console.log("\nTask [6]");
function capitalizeStrings(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const capitalized = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        result.push(capitalized);
    }
    return result;
}
console.log(capitalizeStrings(["YeLlOwTreE", "BlUeBuBbLe"]));

/*
    7. Напишіть функцію, яка приймає масив об'єктів та повертає новий масив,
    у якому кожен об'єкт містить властивість "fullName",
    яка складається з об'єднання властивостей "firstName" та "lastName".
*/
console.log("\nTask [7]");
function addFullName(arr) {
    return arr.map(function(item) {
        return {
            ...item,
            fullName: item.firstName + " " + item.lastName
        };
    });
}

const people = [
    {firstName: "Joseph", lastName: "Joestar", age: 30},
    {firstName: "Jotaro", lastName: "Kujo", age: 25},
    {firstName: "Jonathan", lastName: "Joestar", age: 40}
];
console.log(addFullName(people));

/*
    8. Напишіть функцію,
    яка приймає масив чисел та повертає масив унікальних пар чисел,
    сума яких рівна 10.
*/
function findPairs(arr) {
    const pairs = [];
    const visited = new Set();

    for (let i = 0; i < arr.length; i++) {
        const num1 = arr[i];
        const num2 = 10 - num1;

        if (visited.has(num2)) {
            pairs.push([num1, num2]);
        }
        visited.add(num1);
    }
    return pairs;
}
const numbers = [2, 5, 3, 1, 8, 7, 6, 2];
console.log(findPairs(numbers));

/*
    9. Напишіть функцію, яка приймає масив об'єктів та повертає новий масив,
    в якому всі рядки з властивості "text" містять менше ніж 5 слів
*/
function filterObjects(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const text = arr[i].text;
        const words = text.split(' ');

        if (words.length < 5) {
            result.push(arr[i]);
        }
    }
    return result;
}
let objects = [
    { id: 1, text: "Lorem ipsum dolor sit amet" },
    { id: 2, text: "consectetur adipiscing elit" },
    { id: 3, text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { id: 4, text: "Ut enim ad minim veni" }
];
console.log((filterObjects(objects)));