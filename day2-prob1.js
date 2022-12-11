let inputs = document.body.innerText.split('\n');
let points = 0;

for (let input of inputs) {
    switch (input[2]) {
        case 'X':
            points = points + 1;
            switch (input[0]) {
                case 'A':
                    // Rock and Rock
                    points = points + 3;
                    break;
        case 'B':
          // Paper Beats Rock
          break;
        case 'C':
          // Scissors Loses Rock
          points = points + 6;
      }
      break;
    case 'Y':
      points = points + 2;
      switch (input[0]) {
        case 'A':
          // Rock and Paper
          points = points + 6;
          break;
        case 'B':
          // Paper Beats Paper
          points = points + 3;
          break;
        case 'C':
          // Scissors Loses Rock
      }
      break;
    case 'Z':
      points = points + 3;
      switch (input[0]) {
        case 'A':
          // Rock and Paper
          break;
        case 'B':
          // Paper Beats Paper
          points = points + 6;
          break;
        case 'C':
          // Scissors Loses Rock
                    points = points + 3;
      }
      break;
  }
}

points