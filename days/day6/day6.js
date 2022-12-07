/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/Advent_of_code_2022/days/day6/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    //console.log(data);
    function separateLetters(textFile) {
      let lineArray = textFile.split("");
      return lineArray;
    }
    
    function partOne(array){
      for (i = 0; i < array.length - 3; i++){
        let testArray = [];
        for (y = 0; y < 4; y++){
          testArray.push(array[i + y]);
        }
        let hasDuplicate = testArray.some((val, i) => testArray.indexOf(val) !== i);
        if (hasDuplicate === false){
          return i+ 4
        }
      }

    }

    function partTwo(array){
      for (i = 0; i < array.length - 13; i++){
        let testArray = [];
        for (y = 0; y < 14; y++){
          testArray.push(array[i + y]);
        }
        let hasDuplicate = testArray.some((val, i) => testArray.indexOf(val) !== i);
        if (hasDuplicate === false){
          return i+ 14
        }
      }

    }

    array1 = separateLetters(data);
    part1 = partOne(array1);
    part2 = partTwo(array1);

    document.getElementById("solutionOutput").innerText= "Part 1: "+ part1 + "\nPart 2: "+ part2;
}