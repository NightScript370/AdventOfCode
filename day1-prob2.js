const numbers = Uint16Array.from(document.body.innerText.split("\n").map(numString => parseInt(numString)))
let increments = 0;
let lastNumber = 0;

const arrayHolder = [];
for (const number of numbers) {
    arrayHolder.push(number);
    if (arrayHolder.length < 3)
        continue;

    const currentNumberHandler = arrayHolder.reduce((a,b) => a + b);
    if (currentNumberHandler > lastNumber && lastNumber !== 0)
        increments++;

    lastNumber = currentNumberHandler;
    arrayHolder.shift()
}