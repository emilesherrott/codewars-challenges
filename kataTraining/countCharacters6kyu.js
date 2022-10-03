const count = (str) => {
  let arr = str.split("")
  arr.sort()
  let charArr = []
  let countArr = []
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (!charArr.includes(arr[i])) {
      charArr.push(arr[i])
      count = 1
      countArr.push(count)
    } else if(charArr.includes(arr[i])) {
        countArr.pop()
        count ++
        countArr.push(count)
    }
  }
  return charArr.reduce((previousValue, currentValue, currentIndex) => {
    return {...previousValue, [currentValue]: countArr[currentIndex]};
  }, {});
}

module.exports = count
