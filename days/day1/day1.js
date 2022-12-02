/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day1/data.txt') // get the data from text file. 
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

    function makeArrayOfElves(separatedLines) {
      let elves = [];
      let calories = 0;
      
      for (var i = 0; i < separatedLines.length; i++){

        if (separatedLines[i] === ""){
          elves.push(calories);
          calories = 0
        }
        else{
          valueInPack = parseInt(separatedLines[i]);
          calories = calories + valueInPack;
        }

      }

      return elves;

    }

    function findTopThreeElfsCalorieTotals(elfListInput){
      var sortedArray = elfListInput.sort((a,b)=> a - b);
      sortedArray = sortedArray.reverse();
      let topThreeElves = 0;

      for (i = 0; i < 3; i++){
        topThreeElves = topThreeElves + parseInt(sortedArray[i])
      }

      return topThreeElves;
      
    }

    var lines = separateLinesToArrayOfStings(data);
    var elfList = makeArrayOfElves(lines);
    
    var elfWithMostCalories = Math.max(...elfList); //part 1 answer
    var topThree = findTopThreeElfsCalorieTotals(elfList); //part 2 answer


    document.getElementById("solutionOutput").innerText= "Part 1: " + elfWithMostCalories + "\n Part 2: "+ topThree ;
}