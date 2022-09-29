// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
    let arr = s.split('')
    let arrLength = s.split('').length
    let even = !(arrLength % 2) ? true : false
    let startPoint = Math.ceil((arrLength / 2) - 1)
    let finalArr = []
    let returnString 
    if (even) {
      for (let i=0; i<arrLength; i++) {
        if (i === startPoint || i === startPoint+1) {
          finalArr.push(arr[i])
        }
      }
      returnString = finalArr.join('')
      return returnString
    }
    else {
      for (let i=0; i<arrLength; i++) {
        if (i === startPoint) {
          finalArr.push(arr[i])
        }
      }
      returnString = finalArr.join('')
      return returnString
    }
  }

module.exports = getMiddle


// describe("GetMiddle", function() {
//   it("Tests", function() {
//    Test.assertEquals(getMiddle("test"),"es");
//    Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });