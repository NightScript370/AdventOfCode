let directions = document.body.innerText.split("")
let pastCoordinates = new Map();
let currentCoordinate = {santa: [0,0], roboSanta: [0,0]};

for (let path in directions) {
    const santaInCharge = (parseInt(path) % 2 === 0 ? 'santa' : 'roboSanta');
    switch (directions[path]) {
    case '^':
            currentCoordinate[santaInCharge] = [currentCoordinate[santaInCharge][0], ++currentCoordinate[santaInCharge][1]];
            break;
    case 'v':
            currentCoordinate[santaInCharge] = [currentCoordinate[santaInCharge][0], --currentCoordinate[santaInCharge][1]];
            break;
    case '>':
            currentCoordinate[santaInCharge] = [++currentCoordinate[santaInCharge][0], currentCoordinate[santaInCharge][1]];
            break;
    case '<':
            currentCoordinate[santaInCharge] = [--currentCoordinate[santaInCharge][0], currentCoordinate[santaInCharge][1]];
            break;
    }

    pastCoordinates.set(currentCoordinate[santaInCharge].toString(), (pastCoordinates.has(currentCoordinate[santaInCharge].toString()) ? pastCoordinates.get(currentCoordinate[santaInCharge].toString()) + 1 : 1))
}

// pastCoordinates.size;