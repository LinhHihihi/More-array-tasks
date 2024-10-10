var aphorisms = [
    "A barking dog never bites.",
    "Absence makes the heart grow fonder.",
    "All that glitters isn't gold. ...",
    "Children should be seen and not heard.",
    "Doubt is the beginning, not the end, of wisdom."
];

var randomIndex = Math.floor(Math.random() * aphorisms.length);

var randomAphorism = aphorisms[randomIndex];

document.getElementById("aphorisms").innerText = randomAphorism;