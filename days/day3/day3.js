/* to be added at the start for github to work => /Advent_of_code_2022 */
fetch('/Advent_of_code_2022/days/day3/data.txt') // get the data from text file. 
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

  function splitString(string){
    let output = [];
    let middle = string.length / 2;
    output.push(string.slice(0, middle));
    output.push(string.slice(middle));
    return output;
  }

  function getScore(SingleletterArray){
    const score = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (i = 0; i < score.length; i++){
      if (SingleletterArray[0] == score[i]){
        return parseInt( i + 1);
      }
    }
  }

  function partOne(Array){
    var total = 0;

    for (x = 0; x < Array.length; x++){
      let wordSplit = splitString(Array[x])
      var arr1 = wordSplit[0].split("");
      var arr2 = wordSplit[1].split("");
      let intersection = arr1.filter(element => arr2.includes(element));
      let amount = getScore(intersection);
      total = total + amount
    }
    return total;
  }

  function partTwo(Array){
    var total = 0;
    for (x = 0; x <Array.length/3; x++){
      let count1 = 0 + 3*x;
      let count2 = 1 + 3*x;
      let count3 = 2 + 3*x;
      let arr1 = Array[count1].split("");
      let arr2 = Array[count2].split("");
      let arr3 = Array[count3].split("");
      let intersection1 = arr1.filter(el => arr2.includes(el));
      let intersection2 = intersection1.filter(el => arr3.includes(el));
      let amount = getScore(intersection2);
      total = total + amount;
    }
    return total;
  }
  
  let listArray = separateLines(data);

  var part1 = partOne(listArray);
  var part2 = partTwo(listArray);


  document.getElementById("solutionOutput").innerText= "Part 1: "+ part1 + "\nPart 2: "+part2;
}