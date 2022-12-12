const actionList = document.body.innerText.split("\n").filter(Boolean).map(line => line.split(" "))
const directions = { horizontal: 0, depth: 0 }
const affectee = { 'forward': 'horizontal', 'down': 'depth', 'up': 'depth' }

for (let [action, fluxation] of actionList) {
    const appending = parseInt(fluxation) * (action == 'up' ? -1 : 1);
    directions[affectee[action]] += appending
}

directions.depth * directions.horizontal;