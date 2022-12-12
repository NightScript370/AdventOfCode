const numbers = Uint16Array.from(document.body.innerText.split("\n").map(numString => parseInt(numString)))
let increments = 0;
console.log(numbers.length)
for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] > numbers[i - 1])
        increments++;
    console.log(i)
}

console.log(increments);