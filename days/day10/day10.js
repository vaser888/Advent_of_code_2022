/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day10/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    console.log(data);

    function separateLines(textFile) {
      let lineArray = textFile.split("\r\n");
      return lineArray;
    }
  
    function splitArray(array, splitString) {
      let splitGroup = [];
      for (i = 0; i < array.length; i++){
        splitGroup.push(array[i].split(splitString));
      }
      return splitGroup;
    }

    function partOne(array){
      let cycle = 0;
      let register = 1;

      for(i = 0; i <array.length; i++){
        
      }
    }


 

    let array1 = separateLines(data);
    array1 = splitArray(array1, " ");
    console.log(array1);
    part1 = partOne(array1);

    document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}