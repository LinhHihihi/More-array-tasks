var clubMembers = [];

function addMember() {
    var name = document.getElementById("nameInput").value.trim();
    var age = parseInt(document.getElementById("ageInput").value.trim());

    if (name === "" || isNaN(age)) {
        alert("Please enter a valid name and age.");
        return;
    }

    clubMembers.push({ name: name, age: age });

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("nameInput").focus();
    document.getElementById("divOutput").innerHTML = clubMembers.length + " members";
}

function showMinors() {
    var minors = clubMembers.filter(function(member) {
        return member.age < 18;
    });

    var outputText = "";
    minors.forEach(function(member) {
        outputText += member.name + ", " + member.age + " years<br />";
    });

    if (minors.length === 0) {
        outputText = "0 minors.";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}

function showAdults() {
    var adults = clubMembers.filter(function(member) {
        return member.age >= 18;
    });

    var outputText = "";
    adults.forEach(function(member) {
        outputText += member.name + ", " + member.age + " years<br />";
    });

    if (adults.length === 0) {
        outputText = "0 adults.";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}

function showOldest() {
    var maxAge = Math.max(...clubMembers.map(member => member.age));
    var oldestMembers = clubMembers.filter(member => member.age === maxAge);

    var outputText = "";
    oldestMembers.forEach(function(member) {
        outputText += member.name + ", " + member.age + " years<br />";
    });

    if (oldestMembers.length === 0) {
        outputText = "No members found.";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}

function showYoungest() {
    var minAge = Math.min(...clubMembers.map(member => member.age));
    var youngestMembers = clubMembers.filter(member => member.age === minAge);

    var outputText = "";
    youngestMembers.forEach(function(member) {
        outputText += member.name + ", " + member.age + " years<br />";
    });

    if (youngestMembers.length === 0) {
        outputText = "No members found.";
    }

    document.getElementById("divOutput").innerHTML = outputText;
}
