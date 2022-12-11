const knapsacks = document.body.innerText.split("\n").filter(Boolean)
const elfGroups = knapsacks.reduce((all,one,i) => {
   const ch = Math.floor(i/3); 
   all[ch] = [].concat((all[ch]||[]),one); 
   return all
}, []);

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseAlphabet = alpha.map((x) => String.fromCharCode(x));
const fullAlphabet = upperCaseAlphabet.join('').toLowerCase() + upperCaseAlphabet.join('')

const duplicatedItems = [];
for (let elfGroup of elfGroups) {
    const smallestIndex = elfGroup.sort((a, b) => a.length - b.length)[0]
    const letterMatch = smallestIndex.split("").find(char => elfGroup[0].includes(char) && elfGroup[1].includes(char) && elfGroup[2].includes(char))
    if (fullAlphabet.includes(letterMatch)) {
        duplicatedItems.push(fullAlphabet.indexOf(letterMatch) + 1)
    }
}

duplicatedItems.reduce((partialSum, a) => partialSum + a)