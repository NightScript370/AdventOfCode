const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseAlphabet = alpha.map((x) => String.fromCharCode(x));
const fullAlphabet = upperCaseAlphabet.join('').toLowerCase() + upperCaseAlphabet.join('')

const fullKnapsack = document.body.innerText.split('\n')
const duplicatedItems = []
for (let knapsackInner of fullKnapsack) {
    const [firstCompart, secondCompart] = [knapsackInner.slice(0, Math.floor(knapsackInner.length / 2)), knapsackInner.slice(Math.floor(knapsackInner.length / 2), knapsackInner.length)]
    const letterMatch = firstCompart.split('').find(character => secondCompart.includes(character))
    if (fullAlphabet.includes(letterMatch)) {
            duplicatedItems.push(fullAlphabet.indexOf(letterMatch) + 1)
        }
}

duplicatedItems.reduce((partialSum, a) => partialSum + a)