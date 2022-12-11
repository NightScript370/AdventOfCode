let inputs = document.body.innerText.split('\n');
let points = 0;

for (let input of inputs) {
    switch (input[2]) {
        case 'X':
                        // Need to lose, so no bonus points
            switch (input[0]) {
                case 'A':
                    // Loss of rock is scissors. Scissors is 3 points
                    points = points + 3;
                    break;
        case 'B':
          // Loss of paper is rock. Rock is one point
                    points = points + 1;
          break;
        case 'C':
          // Loss of scissors is paper. Paper is 2 point
          points = points + 2;
      }
      break;
    case 'Y':
            // Draw. You automatically get 3 points
      points = points + 3;
      switch (input[0]) {
        case 'A':
          // Rock and Rock
          points = points + 1;
          break;
        case 'B':
          // Paper and Paper
          points = points + 2;
          break;
        case 'C':
          // Scissors and Scissors
                    points = points + 3;
      }
      break;
    case 'Z':
            // WIN!
      points = points + 6;
      switch (input[0]) {
        case 'A':
          // Rock and beaten by paper
                    points = points + 2;
          break;
        case 'B':
          // Paper Beaten by scissors
          points = points + 3;
          break;
        case 'C':
          // Scissors Beaten by Rock
          points = points + 1;
      }
      break;
  }
}

points;