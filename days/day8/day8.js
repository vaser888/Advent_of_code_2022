/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day8/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){

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

  function checkFromleft(treeValue1, x1, theArray){
    let tallestTree = 0;
    for (i = 0; i < x1; i++){
      if (tallestTree < theArray[i]){
        tallestTree = theArray[i];
      }
      if (treeValue1 > tallestTree && x1 === i + 1){
        return true;
      }
    }
    return false;
  }

function checkFromRight(treeValue1, x1, theArray){
    let tallestTree = 0;
    for (i = theArray.length-1; i > x1; i--){
      if (tallestTree < theArray[i]){
        tallestTree = theArray[i];
      }
      if (treeValue1 > tallestTree && x1 === i - 1){
        return true;
      }
    }
    return false;
  }


  function partOne(array){
    let totalVisibleTrees = array[0].length + array.length - 1 + array[0].length - 2 + array.length - 1
    
    for (y = 1; y < array.length - 1; y++){
      for (x = 1; x < array[y].length - 1; x++){
        let treeValue = array[y][x];
        let visibleLeft = checkFromleft(treeValue, x, array[y]);
        let visibleRight = checkFromRight(treeValue, x, array[y]);

        if (visibleLeft == true || visibleRight == true){
          totalVisibleTrees += 1
        }
        console.log(visibleRight);
      }
      
      //console.log(array[y][x], x,y)
    }
    console.log(totalVisibleTrees);
  }
  

  let array1 = separateLines(data);
  array1 = splitArray(array1, "");
 
  part1 = partOne(array1);
  console.log(array1)
  document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}