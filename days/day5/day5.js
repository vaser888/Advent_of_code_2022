/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day5/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    //console.log(data);

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
    function separateStartStackFromInstructions(array){
      let startStackArray = [];
      let moveInstructions = [];
      let packagedOutput = [];
      let setValue = true;
      for (i = 0; i <array.length; i++){
        if (setValue === true){       
          if (array[i].length != 0){  
            startStackArray.push(array[i]);
          }
          else{
            setValue = false;
          }
        }
        else{
          moveInstructions.push(array[i]);
        }
      }
      packagedOutput.push(startStackArray);
      packagedOutput.push(moveInstructions);
      return packagedOutput;
    }

    function makeUsableStartStackArray(array){

      array.reverse();
      let numberOfColumns = array[0][(array[0].length-2)]
      console.log(numberOfColumns)
      array.reverse();
      array.pop(); // get rid of number row;
      array.reverse();

      let tempArray = [];

      for (i = 0; i < array.length; i++){
        for (y = 0; y < numberOfColumns; y++){
          tempArray.push(array[i][1+y*4]);
        }
      }
      console.log(tempArray)
      
      for (i = 0; i < tempArray.length/numberOfColumns; i++){
        //console.log(i)
      }

      
      console.log(array)
    }

    let array1 = separateLines(data);
    let array2 = splitArray(array1, "")
    let array3  = separateStartStackFromInstructions(array2);
    let array4 = makeUsableStartStackArray(array3[0]);
    //console.log(array3)
    document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}