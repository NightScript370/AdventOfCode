let pastCoordinates = new Map();
let currentCoordinate = [0,0];

for (let path in directions) {
    switch (directions[path]) {
    case '^':
            currentCoordinate = [currentCoordinate[0], ++currentCoordinate[1]];
            break;
    case 'v':
            currentCoordinate = [currentCoordinate[0], --currentCoordinate[1]];
            break;
    case '>':
            currentCoordinate = [++currentCoordinate[0], currentCoordinate[1]];
            break;
    case '<':
            currentCoordinate = [--currentCoordinate[0], currentCoordinate[1]];
            break;
    }

    pastCoordinates.set(currentCoordinate.toString(), (pastCoordinates.has(currentCoordinate.toString()) ? pastCoordinates.get(currentCoordinate.toString()) + 1 : 1))

    if (path < 8)
        console.log(path, currentCoordinate, pastCoordinates)
}

pastCoordinates.size;