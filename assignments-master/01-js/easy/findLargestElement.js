/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(numbers) {
  let maxNum=numbers[i]
  for(let i=o;i<numbers.length;i++){
    if(numbers[i]>maxNum){
        maxNum=numbers[i]
    }
  }
  return maxNum;
}

module.exports = findLargestElement;