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

    for(instruction = 0; instruction < array.length; instruction++){
      let direction = array[instruction][0];
      let distance = parseInt(array[instruction][1]);
      let HX = head[0];
      let HY = head[1];
      let TX = tail[0];
      let TY = tail[1];
      switch(direction){
        case "R":
          for(i = HX; i <= distance + HX; i++){
            head[0] = i;
            let res = calculateDifference(head[0], tail[0])
            //console.log(res)
            if(res >1){
              tail[0] +=1
              if(tail[1] != head[1]){
                tail[1] = head[1];

              }
            }

            console.log(head, tail)
          }

        break;
        case "L":
          for(i = HX; i >= HX - distance; i--){
            head[0] = i;

          }

        break;
        case "U":
          for(i = HY; i <= distance + HY; i++){
            head[1] = i;

          }

        break;

        case "D":
          for(i = HY; i >= HY - distance; i--){
            head[1] = i;

          }

        break;
      }
      

    }


  }
  
  let array1 = separateLines(data);
  array1 = splitArray(array1," ");
  console.log(array1)
  let something = partOne(array1)

  document.getElementById("solutionOutput").innerText= "Part 1: " + "\nPart 2: ";
}