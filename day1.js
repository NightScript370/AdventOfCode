const numbers = Uint16Array.from(document.body.innerText.split("\n").map(numString => parseInt(numString)))
let increments = 0;
console.log(numbers.length)
for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] > numbers[i - 1])
        increments++;
    console.log(i)
}

console.log(increments);
increments = 0;
let lastNumber = 0;

const arrayHolder = [];
for (const number of numbers) {
    arrayHolder.push(number);
    if (arrayHolder.length < 3)
        continue;

    const currentNumberHandler = arrayHolder.reduce((a,b) => a + b);
    console.log(numbers.indexOf(number), currentNumberHandler, lastNumber, arrayHolder);
    if (currentNumberHandler > lastNumber && lastNumber !== 0)
        increments++;

    lastNumber = currentNumberHandler;
    arrayHolder.shift()
}

console.log(increments);