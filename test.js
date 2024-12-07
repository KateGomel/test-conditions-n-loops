/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function getNearestBigger(number) {
  let biggerNumber = 0;

  let tempArray = [];
  for (let n = number; n > 0; n = Math.floor(n / 10)){
    const digit = n % 10; 
    tempArray.push(digit);
  }

  tempArray = tempArray.reverse()

  let indexReversal
  for(let i = tempArray.length-1; i >= 0; i-=1){
    if(tempArray[i] < tempArray[i+1]) {
      indexReversal = i
      break;
    } else {
      indexReversal = 0;
    } 
  }

  if(indexReversal){
    const arrayForReversal = tempArray.slice(indexReversal+1)
    for(let i = arrayForReversal.length-1; i >= 0; i-=1) {
      if(tempArray[indexReversal] < arrayForReversal[i]) {
        let temp = tempArray[indexReversal]
        tempArray[indexReversal] = arrayForReversal[i]
        arrayForReversal[i] = temp
        break
        }
      }
    arrayForReversal.sort((a, b) => a - b);
    tempArray = tempArray.slice(0, indexReversal+1).concat(arrayForReversal)
    biggerNumber = tempArray.reduce((acc, item) => acc * 10 + item, 0)
  } else {
    biggerNumber = number     
  }
 
  return biggerNumber
}

console.log(getNearestBigger(321321));