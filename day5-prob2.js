const documentBody = (await Deno.readTextFile('./input.txt')).split("\n");
const lineSeparator = documentBody.indexOf(documentBody.find(firstLine => !firstLine.includes('[')))

const brokenCraneColumnNumber = new Array(parseInt(documentBody[lineSeparator].replaceAll(" ", "").split("").at(-1))).fill([])
console.log(brokenCraneColumnNumber)

const prebuiltCranes = Array.from(documentBody).splice(0,lineSeparator).map(craneLines => Array.from(craneLines.match(/.{1,4}/g)))
console.log(prebuiltCranes)
for (let i in brokenCraneColumnNumber) {
    for (let row of prebuiltCranes) {
        console.log('DEBUG', i, prebuiltCranes.indexOf(row))
        brokenCraneColumnNumber[parseInt(i)].push(row[parseInt(i)])
    }
}

let craneColumnNumber = brokenCraneColumnNumber[0].reduce((all,one,i) => {
    const ch = Math.floor(i/prebuiltCranes.length); 
    all[ch] = [].concat((all[ch]||[]),one); 
    return all
}, []);

craneColumnNumber = craneColumnNumber.map(subArray => subArray.reverse()
    .filter(string=>string.trim()).map(letterBox => letterBox.trim().replace('[', '').replace(']', '')))

const instructions = Array.from(documentBody).splice(lineSeparator+2, documentBody.length);

for (const instruction of instructions) {
    const [_action, numberToMove, _english, origin, _towards, destination] = instruction.split(" ");

    const originCrate = craneColumnNumber[(parseInt(origin) - 1)];
    const destinationCrate = craneColumnNumber[(parseInt(destination) - 1)]

    craneColumnNumber[(parseInt(destination) - 1)] = destinationCrate.concat(originCrate.splice(originCrate.length - parseInt(numberToMove)))
}

console.log(craneColumnNumber, craneColumnNumber.map(subArray => subArray.at(-1)).join(""));