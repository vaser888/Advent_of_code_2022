/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day8/data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
  console.log(data)
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

  function checkFromTop(treeValue1, x1, y1 ,fullArray){
    let tallestTree = 0;
    for (counter = 0; counter < y1; counter++){
      if (tallestTree < fullArray[counter][x1]){
        tallestTree = fullArray[counter][x1];
      }
      if (treeValue1 > tallestTree && y1 === counter + 1){
        return true;
      }
    }
    return false;
  }

  function checkFromBottom(treeValue1, x1, y1 ,fullArray){
    let tallestTree = 0;
    for (counter = fullArray.length-1; counter > y1; counter--){
      if (tallestTree < fullArray[counter][x1]){
        tallestTree = fullArray[counter][x1];
      }
      if (treeValue1 > tallestTree && y1 === counter - 1){
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
        let visibleTop = checkFromTop(treeValue, x, y, array);
        let visibleBottom = checkFromBottom(treeValue,x,y,array);

        if (visibleLeft == true || visibleRight == true || visibleTop == true || visibleBottom == true){
          totalVisibleTrees += 1
        }
      }
    }
    return totalVisibleTrees;
  }
  
  function getDistanceLeft(x1, y1, treeValue1, fullArray){
    let distance = 0;
    for(count = x1-1; count >= 0; count--){
      //console.log("x:"+x1,"y:"+y1)
      //console.log(count, fullArray[y1][count], treeValue1)
      if (treeValue1 > fullArray[y1][count]){
        distance = distance + 1;
      }
      if (treeValue1 <= fullArray[y1][count]){
        distance = distance + 1;
        //console.log("dis: "+distance);
        return distance;
      }
    }
    //console.log("dis: "+distance);
    return distance;
  }
  function getDistanceRight(x1, y1, treeValue1, fullArray){
    let distance = 0;
    console.log(x1, y1, fullArray[y1].length)
    for(count = x1+1; count >= fullArray[y1].length; count++){
      console.log(count);
      //console.log("x:"+x1,"y:"+y1)
      //console.log(count, fullArray[y1][count], treeValue1)
      if (treeValue1 > fullArray[y1][count]){
        distance = distance + 1;
      }
      if (treeValue1 <= fullArray[y1][count]){
        distance = distance + 1;
        //console.log("dis: "+distance);
        return distance;
      }
    }
    //console.log("dis: "+distance);
    return distance;

  }

  function partTwo(array){
    for (y = 1; y < array.length - 1; y++){
      for (x = 1; x < array[y].length - 1; x++){
        let treeValue = array[y][x];
        let distanceLeft = getDistanceLeft(x, y, treeValue, array);
        let distanceRight = getDistanceRight(x, y, treeValue, array);
        //console.log(treeValue)
      }
    }
  }

  let array1 = separateLines(data);
  array1 = splitArray(array1, "");
 
  part1 = partOne(array1);

  part2 = partTwo(array1);

  document.getElementById("solutionOutput").innerText= "Part 1: " + part1 + "\nPart 2: ";
}
