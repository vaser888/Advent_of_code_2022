/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day2/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    //console.log(data);

    function separateLinesToArrayOfStings(data) {
      let lines = data.split("\r\n");
      return lines;
    }

    function makeArrayOfStrings(lines){
      var arrayNew = [];
      for (i = 0; i < lines.length; i++){
        arrayNew[i] = lines[i].split(" "); 
      }
      return arrayNew;
    }

    var stringArray = separateLinesToArrayOfStings(data);
    var arrayOfStrings = makeArrayOfStrings(stringArray);

    function calculateGameOutcomePartOne(array){
      let totalScore = 0;
      const win = 6;
      const loss = 0;
      const draw = 3;
      
      for (i = 0; i < arrayOfStrings.length; i++){

        switch (array[i][0]) {

          case "A": // Rock
            switch (array[i][1]) {
              case "X": //Rock
                totalScore += 1 + draw;
              break;
              case "Y": //Paper
                totalScore += 2 + win;
              break;
              case "Z": //Scissors
                totalScore += 3 + loss;
              break;
            }  
            break;

          case "B": // Paper
            switch (array[i][1]) {
              case "X": //Rock
                totalScore += 1 + loss;
              break;
              case "Y": //Paper
                totalScore += 2 + draw;
              break;
              case "Z": //Scissors
                totalScore += 3 + win;
              break;
            }  
            break;

          case "C": //Scissors
            switch (array[i][1]) {
              case "X": //Rock
                totalScore += 1 + win;
              break;
              case "Y": //Paper
                totalScore += 2 + loss;
              break;
              case "Z": //Scissors
                totalScore += 3 + draw;
              break;
            }  
            break;            
        }        
      }
      return totalScore;
    }

    function calculateGameOutcomePartTwo(array){
      let totalScore = 0;
      const win = 6;
      const loss = 0;
      const draw = 3;
      
      for (i = 0; i < arrayOfStrings.length; i++){

        switch (array[i][0]) {

          case "A": // Rock
            switch (array[i][1]) {
              case "X": //lose
                totalScore += 3 + loss;
              break;
              case "Y": //draw
                totalScore += 1 + draw;
              break;
              case "Z": //win
                totalScore += 2 + win;
              break;
            }  
            break;

          case "B": // Paper
            switch (array[i][1]) {
              case "X": //loss
                totalScore += 1 + loss;
              break;
              case "Y": //draw
                totalScore += 2 + draw;
              break;
              case "Z": //win
                totalScore += 3 + win;
              break;
            }  
            break;

          case "C": //Scissors
            switch (array[i][1]) {
              case "X": //loss
                totalScore += 2 + loss;
              break;
              case "Y": //draw
                totalScore += 3 + draw;
              break;
              case "Z": //win
                totalScore += 1 + win;
              break;
            }  
            break;            
        }        
      }
      return totalScore;
    }

    var x = calculateGameOutcomePartOne(arrayOfStrings);
    var y =calculateGameOutcomePartTwo(arrayOfStrings);

    document.getElementById("solutionOutput").innerText= "Part 1: "+ x + "\nPart 2: " + y;
}