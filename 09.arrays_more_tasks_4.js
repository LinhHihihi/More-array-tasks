function myLotteryNumbers() {
    const lotteryNumbers = new Set();

    while (lotteryNumbers.size < 7) {
        const randomNum = Math.floor(Math.random() * 39) + 1;
        lotteryNumbers.add(randomNum);
    }

    const sortedNumbers = Array.from(lotteryNumbers).sort((a, b) => a - b);
    document.getElementById("lotteryNumbers").innerHTML = sortedNumbers.join(" ");
}

myLotteryNumbers();
