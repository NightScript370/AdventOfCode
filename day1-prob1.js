Int32Array.from(document.body.innerText.split("\n\n").map(elf => elf.split("\n").map(calorieString => parseInt(calorieString)).reduce((a, b) => a + b))).sort().filter(Boolean).at(-1)