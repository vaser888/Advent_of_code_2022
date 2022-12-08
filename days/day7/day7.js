/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day7/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){

  function separateLines(textFile) {
    let lineArray = textFile.split("\r\n");
    return lineArray;
  }

  function makeInstructionsArray(array){
    let instructionArray = [];
    for (i = 0; i < array.length; i++){
      let str = array[i];
      instructionArray.push(str.split(" "));
    }
    return instructionArray;
  }

  function creatCompleteDirectoryArray(array){
    let dirPointer = 0;
    let treeArray = [];
    for (i = 0; i < array.length; i++){
      if(array[i][0] === "$"){
        
        if ( array[i][1] === "cd"){
          switch(array[i][2]){
            case "/":
              dirPointer = 0;
              break;
            case "..":
              dirPointer = dirPointer - 1;

              break;
            default:
              //directory name
              dirPointer = dirPointer + 1;
              break;
          }
          console.log(dirPointer, i) 
        }
        if (array[i][1] === "ls"){
          console.log("start of directory")
        }
      }
      if (array[i][0] === "dir"){
        console.log(array[i][1], "hey");        
      }
      if (array[i][0] != "dir" && array[i][0] !== "$"){
        console.log(array[i][0], "bop", i)
      }
    }
  }

  let instructions = separateLines(data);
  let instructionsArray = makeInstructionsArray(instructions);
  let fullDirectory = creatCompleteDirectoryArray(instructionsArray);
  console.log(instructionsArray);

    document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}