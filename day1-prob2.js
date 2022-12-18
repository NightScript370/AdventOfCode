let counter = 0;
let floorInstructions = document.body.innerText.split("").map(parString => parseInt(parString.replace("(", 1).replace(")", -1)));

let i;
for (i in floorInstructions) {
    counter += floorInstructions[parseInt(i)]
    if (counter == -1)
        break;
}

++i;