const arrayDiff = (a, b) => {
  let outputArr = []
  let matchDetected = false
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        matchDetected = true
      }
    }
    if (!matchDetected){
        outputArr.push(a[i])
    }
    matchDetected = false
  }
  return outputArr
}

module.exports = arrayDiff
