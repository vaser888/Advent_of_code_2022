/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day11/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    console.log(data);

    document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}