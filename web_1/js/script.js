let body = document.getElementById("body")
function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
function getRandomWord() {
    const words = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    return randomWord;
}

function fontSize(num) {
    if (num === 1) {
        body.fontSize += 2;
    }
    else {
        body.fontSize -= 2;
    }
}

function getNextElement() {
    const focusableElements = document.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
    const activeElement = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(activeElement);
    const nextElement = focusableElements[currentIndex + 1] || focusableElements[0];
    nextElement.focus();
}

function getPreviousElement() {
    const focusableElements = document.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
    const activeElement = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(activeElement);
    const previousElement = focusableElements[currentIndex - 1] || focusableElements[focusableElements.length - 1];
    previousElement.focus();
}

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50;
}

function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "b") {
        body.style.backgroundColor = getRandomColor();
    }

    switch (e.ctrlKey && e.key) {
        case 'c': h1.innerHTML = getRandomWord(); break;                                        // LESSON 1
        case 'z': h2.innerHTML = getRandomWord(); break;                                        // LESSON 2
        case 's': console.log(document.getElementById("input").value); break;                   // LESSON 3
        case '+': fontSize(1); break;                                                           // LESSON 4
        case '-': fontSize(0); break;                                                           // LESSON 5

        case ']': getNextElement(); break;                                                      // TAB
        case e.shiftKey && '{': getPreviousElement(); break;                                    // SHIFT + TAB
        case 'y': window.open('index.html', '_blank'); break;                                   // T
        case 'w': window.close(); break;
        case 'k': prompt(); break;                                                              // N

        case "Enter": {
            const table = document.getElementById("table");
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = "New cell 1";
            cell2.innerHTML = "New cell 2";
            break;
        }
        case e.altKey && e.shiftKey && 'P': {
            let winWidth = window.innerWidth;
            let winHeight = window.innerHeight;
            const div = document.createElement("div");
            div.style.backgroundColor = getRandomColor();
            div.style.width = getRandomSize() + "px";
            div.style.height = getRandomSize() + "px";
            div.style.top = getRandomPosition(0, winHeight) + "px";
            div.style.left = getRandomPosition(0, winWidth) + "px";
            div.style.position = "absolute";
            document.body.appendChild(div);
            break;
        }
        case 'a': {
            body.style.transition = "background-color 2s ease-in-out";
            body.style.backgroundColor = getRandomColor();
            break;
        }
    }

    if (e.key === "Enter") {
        const password = e.target.value;
        if (password === "V8") {
            body.style.backgroundColor = "green";
            alert("Correct password!");
        }
        else {
            body.style.backgroundColor = "red";
            alert("Incorrect password!");
        }
    }
});
