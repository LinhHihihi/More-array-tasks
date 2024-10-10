const bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function bloodTypesDistribution() {
    const bloodTypeCount = {};
    const totalBloodTypes = bloodTypes.length;

    bloodTypes.forEach(type => {
        if (bloodTypeCount[type]) {
            bloodTypeCount[type]++;
        } else {
            bloodTypeCount[type] = 1;
        }
    });

    const distribution = [];
    for (const type in bloodTypeCount) {
        const percentage = Math.round((bloodTypeCount[type] / totalBloodTypes) * 100);
        distribution.push({ type: type, percentage: percentage });
    }

    distribution.sort((a, b) => a.type.localeCompare(b.type));

    let output = '';
    distribution.forEach(item => {
        output += item.percentage + ' %: ' + item.type + '<br />';
    });

    document.getElementById("bloodTypeDistribution").innerHTML = output;
}

bloodTypesDistribution();
