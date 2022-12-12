const actionList = document.body.innerText.split("\n").filter(Boolean).map(line => line.split(" "))
const directions = { horizontal: 0, aim: 0, depth: 0 }

for (let [action, fluxation] of actionList) {
    fluxation = parseInt(fluxation)
    if (action !== 'forward') {
        const appending = fluxation * (action == 'up' ? -1 : 1);
        directions.aim += appending
        continue;
    }

    directions.horizontal += fluxation;
    directions.depth += (directions.aim * fluxation)
}

directions.depth * directions.horizontal 