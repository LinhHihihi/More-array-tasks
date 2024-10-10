var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function insertValue() {
    var userInput = document.getElementById("txtValue").value.trim().toUpperCase();
    
    if (userInput === "") {
        alert("Wrong blood types. Please enter the right form.");
        return;
    }
    
    var count = 0;

    for (var i = 0; i < bloodTypes.length; i++) {
        if (bloodTypes[i] === userInput) {
            count++;
        }
    }

    var percentage = Math.round((count / bloodTypes.length) * 100);

    if (count > 0) {
        document.getElementById("divOutput").innerHTML = userInput + " " + percentage + " percent";
    } else {
        document.getElementById("divOutput").innerHTML = "Wrong blood types. Please enter the right one.";
    }
}
