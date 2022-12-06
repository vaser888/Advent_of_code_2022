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
          let temp = array[i].join("");
          moveInstructions.push(temp);
        }
      }
      packagedOutput.push(startStackArray);
      packagedOutput.push(moveInstructions);
      return packagedOutput;
    }

    function makeUsableStartStackArray(array){

      array.reverse();
      let numberOfColumns = array[0][(array[0].length-2)];
      array.reverse();
      array.pop(); // get rid of number row;
      array.reverse();

      let tempArray = [];

      for (i = 0; i < array.length; i++){
        for (y = 0; y < numberOfColumns; y++){
          tempArray.push(array[i][1+y*4]);
        } 
      }
      
      let completeArray = Array.from(Array(parseInt(numberOfColumns)), () => new Array());

      let tempArrayLength = tempArray.length;

      for (i = 0; i < tempArrayLength; i++){
        if( tempArray[i] === " "){
          //do nothing
        }
        else{
          let orderNumber =  i % numberOfColumns;
          completeArray[orderNumber].push(tempArray[i]);
        }
      }
      return completeArray;
    }

    function makeInstructionsArray(array){

      let instructionArray = [];

      for (i = 0; i < array.length; i++){
        let str = array[i];
        str = str.replace("move ", "");
        str = str.replace(" from", "");
        str = str.replace("to ", "");
        instructionArray.push(str.split(" "));

      }
      return instructionArray;
    }

    function partOne(startStack, instructionList) {

      for (i = 0; i <instructionList.length; i++){
        for (m = 0; m < instructionList[i][0]; m++){
          let from = instructionList[i][1] - 1;
          let to = instructionList[i][2] - 1;
          let temp = startStack[from].pop();
          startStack[to].push(temp);
        }
      }
      var finalString = "";
      for (i = 0; i < startStack.length; i++){
        let letter = startStack[i].pop();
        finalString = finalString + letter;
      }
      return finalString;
    }


    let array1 = separateLines(data);
    let array2 = splitArray(array1, "")
    let array3  = separateStartStackFromInstructions(array2);
    let array4 = makeUsableStartStackArray(array3[0]);
    let array5 = makeInstructionsArray(array3[1]);
    let part1 = partOne(array4, array5);

    document.getElementById("solutionOutput").innerText= "Part 1: "+ part1 + "\nPart 2: ";
}