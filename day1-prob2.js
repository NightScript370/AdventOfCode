let numList = {};
let frequency = 0;
let numbers = document.body.innerText.split("\n").map(numString => parseInt(numString)).filter(Boolean);

while (true) {
    for (let number of numbers) {
        frequency += number;
        if (!(frequency in numList))
            numList[frequency] = 0;

        numList[frequency] += 1;

        if (numList[frequency] == 2)
            break;
    }

    if (numList[frequency] == 2)
        break;
}
frequency;