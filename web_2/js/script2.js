const body = document.getElementById("body");

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === '+') {
        body.fontSize += 2;
    }
    if (e.ctrlKey && e.key === '-') {
        body.fontSize -= 2;
    }
});