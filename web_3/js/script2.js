let a = 1;
let b = 2;

let trace = {
    x: [0, 1, 2, 3, 4],
    y: [0, a, 2 * a, 3 * a, 4 * a + b],
    mode: "lines+markers",
    name: "Graph",
};

const data = [trace];
let layout = { title: "Function grapg y = ax +  b" };
Plotly.newPlot("plot", data, layout);

function updatePlot() {
    let newY = [0, a, 2 * a, 3 * a, 4 * a + b];
    Plotly.update("plot", { y: [newY] });
}

document.getElementById("a").addEventListener("change", () => {
    a = parseFloat(document.getElementById("a").value);
    updatePlot();
});

document.getElementById("b").addEventListener("change", () => {
    b = parseFloat(document.getElementById("b").value);
    updatePlot();
});

let x = 4;
let y = 4 * a + b;

function addPoint() {
    Plotly.addTraces("plot", {
        x: [x],
        y: [y],
        mode: "markers",
        name: `Point (${x}, ${y})`,
    });
    x++;
    y = 4 * a + b * x;
}

function removePoint() {
    let numTraces = Plotly.d3.selectAll(".traces").selectAll(".trace").size();
    if (numTraces > 1) {
        Plotly.deleteTraces("plot", 0);
    }
}