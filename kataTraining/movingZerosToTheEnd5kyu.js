const moveZeros = (arr) => {
    const arrNoZero = arr.filter(num => num !== 0)
    const zeroArr = arr.filter(num => num === 0)
    return arrNoZero.concat(zeroArr)
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))


// const {assert, config} = require("chai");
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//   });
// });