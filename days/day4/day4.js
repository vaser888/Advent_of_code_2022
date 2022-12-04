/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/Advent_of_code_2022/days/day4/data.txt') // get the data from text file. 
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
  function separateGroups(linearray, splitString) {
    let splitGroup = [];
    for (i = 0; i < linearray.length; i++){
      splitGroup.push(linearray[i].split(splitString));
    }
    return splitGroup;
  }
  
  let listArray = separateLines(data);
  let groups = separateGroups(listArray, ",");
  let singleDataArray = separateGroups(groups.flat(1), "-")
  singleDataArray = singleDataArray.flat(1);

  function partOne(dataArray) {
    let reconsider = 0;
    for(i=0; i<dataArray.length/4; i++){
      let section1 = [];
      let section2 = [];
      for (x = parseInt(dataArray[0+4*i]); x <= dataArray[1+4*i]; x++){
        section1.push(x);
      }
      for (x = parseInt(dataArray[2+4*i]); x <= dataArray[3+4*i]; x++){
        section2.push(x);
      }

      let intersection = section1.filter(element => section2.includes(element));

      if (intersection.length === section1.length){
        reconsider +=1;
      }
      else if (intersection.length === section2.length){
        reconsider +=1;
      }
    }
    return reconsider;
  }

  function partTwo(dataArray){
    let overlap = 0;
    for(i=0; i<dataArray.length/4; i++){
      let section1 = [];
      let section2 = [];
      for (x = parseInt(dataArray[0+4*i]); x <= dataArray[1+4*i]; x++){
        section1.push(x);
      }
      for (x = parseInt(dataArray[2+4*i]); x <= dataArray[3+4*i]; x++){
        section2.push(x);
      }
      let intersection = section1.filter(element => section2.includes(element));

      if (intersection.length > 0){
        overlap += 1;
      }
    }
    return overlap;
  }

  let part1 = partOne(singleDataArray);
  let part2 = partTwo(singleDataArray);

  document.getElementById("solutionOutput").innerText= "Part 1: "+ part1 + "\nPart 2: "+ part2;
}