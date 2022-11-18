/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/Advent_of_code_2022/days/day2/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    console.log(data);
    var t = parseInt(data);
    t = t + 150;
    document.getElementById("solutionOutput").innerText= t;
}