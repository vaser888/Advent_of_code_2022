/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/days/day9/data.txt') // get the data from text file. 
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

  function calculateDifference(val1, val2){
    return val1 - val2;
  }
  
  function partOne(array){
    let head = [0,0]; // x y
    let tail = [0,0]; // x y
    let tailPath = [[0,0]];

    for(instruction = 0; instruction < array.length; instruction++){
      
      let direction = array[instruction][0];
      let distance = parseInt(array[instruction][1]);
      let HX = head[0];
      let HY = head[1];
      let tempArray = [];
      switch(direction){

        case "R":
          for(i = HX; i <= distance + HX; i++){
            tempArray = [];
            head[0] = i;
            let res = calculateDifference(head[0], tail[0]);
            if(res >1){
              tail[0] +=1;
              if(tail[1] != head[1]){
                tail[1] = head[1];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("R", head, tail)
          }
        break;

        case "L":
          for(i = HX; i >= HX - distance; i--){
            tempArray = [];
            head[0] = i;
            let res = calculateDifference(head[0], tail[0]);
            if(res< -1){
              tail[0]-=1;
              if(tail[1] != head[1]){
                tail[1] = head[1];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("L",head, tail)
          }
        break;

        case "U":
          for(i = HY; i <= distance + HY; i++){
            tempArray = [];
            head[1] = i;
            let res = calculateDifference(head[1], tail[1]);
            if(res >1){
              tail[1] +=1;
              if(tail[0] != head[0]){
                tail[0] = head[0];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("U", head, tail)
          }
        break;

        case "D":
          for(i = HY; i >= HY - distance; i--){
            tempArray = [];
            head[1] = i;
            let res = calculateDifference(head[1], tail[1]);
            if(res< -1){
              tail[1]-=1;
              if(tail[0] != head[0]){
                tail[0] = head[0];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("D",head, tail)
          }
        break;
      }

    }
    // remove arrays from arrays https://www.kirupa.com/javascript/removing_duplicate_arrays_from_array.htm
    let stringArray = tailPath.map(JSON.stringify);
    let uniqueStringArray = new Set(stringArray);
    let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
    return uniqueArray.length;
  }

  function partTwo(array){

    let rope  = [];
    while (rope.push([0,0])<10);
    
    console.log(rope)
    let head = [0,0]; // x y
    let tail = [0,0]; // x y
    let tailPath = [[0,0]];

    for(instruction = 0; instruction < array.length; instruction++){
      
      let direction = array[instruction][0];
      let distance = parseInt(array[instruction][1]);
      let HX = rope[0][0];
      let HY = rope[0][1];
      let tempArray = [];
      switch(direction){

        case "R":
          for(i = HX; i <= distance + HX; i++){
            tempArray = [];
            rope[0][0] = i;
            for (knot = 0; knot < rope.length-1; knot++){
              let res = calculateDifference(rope[knot][0], rope[knot+1][0]);
              if (res >1){
                rope[knot+1][0] +=1;
                if(rope[knot+1][1] != rope[knot][1]){
                  rope[knot+1][1] += 1;
                }
                if(knot == rope.length-2){
                  tempArray.push(rope[9][0]);
                  tempArray.push(rope[9][1]);
                  tailPath.push(tempArray);
                }
              }
            }
            console.log("R", i, rope[0], rope[1], rope[2], rope[3], rope[4], rope[5], rope[6], rope[7], rope[8], rope[9])
          }
        break;

        case "L":
          for(i = HX; i >= HX - distance; i--){
            tempArray = [];
            head[0] = i;
            let res = calculateDifference(head[0], tail[0]);
            if(res< -1){
              tail[0]-=1;
              if(tail[1] != head[1]){
                tail[1] = head[1];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("L",head, tail)
          }
        break;

        case "U":
          for(i = HY; i <= distance + HY; i++){
            tempArray = [];
            rope[0][1] = i;
            for (knot = 0; knot < rope.length-1; knot++){
              let res = calculateDifference(rope[knot][1], rope[knot+1][1]);
              
              if(res >1){
                rope[knot+1][1] +=1;
                if(rope[knot+1][0] != rope[knot][0]){
                  rope[knot+1][0] += 1;
                }
                if(knot == rope.length-2){
                tempArray.push(rope[9][0]);
                tempArray.push(rope[9][1]);
                tailPath.push(tempArray);
                }
              }
            }
            console.log("U", i, rope[0], rope[1], rope[2], rope[3], rope[4], rope[5], rope[6], rope[7], rope[8], rope[9])
          }
        break;

        case "D":
          for(i = HY; i >= HY - distance; i--){
            tempArray = [];
            head[1] = i;
            let res = calculateDifference(head[1], tail[1]);
            if(res< -1){
              tail[1]-=1;
              if(tail[0] != head[0]){
                tail[0] = head[0];
              }
              tempArray.push(tail[0]);
              tempArray.push(tail[1]);
              tailPath.push(tempArray);
            }
            //console.log("D",head, tail)
          }
        break;
      }

    }
      
    console.log(tailPath)
    // remove arrays from arrays https://www.kirupa.com/javascript/removing_duplicate_arrays_from_array.htm
    let stringArray = tailPath.map(JSON.stringify);
    let uniqueStringArray = new Set(stringArray);
    let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
    return uniqueArray.length;
  }
  
  let array1 = separateLines(data);
  array1 = splitArray(array1," ");
  let part1 = partOne(array1);
  let part2 = partTwo(array1);

  document.getElementById("solutionOutput").innerText= "Part 1: "+ part1 + "\nPart 2: ";
}