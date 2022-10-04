const diamond = (n) => {
  if (n % 2 === 0 || n <= 0) {
    return null
  }
  let output = ""
  let whitespace = " "
  let whitespaceNum = 0
  let asterix = "*"
  let asterixNum = n
  let newLine = "\n"
  let initialString = whitespace.repeat(whitespaceNum) + asterix.repeat(asterixNum) + newLine
  let loopOutput = ""
  for (let i = n; i > 1; i -= 2) {
    whitespaceNum += 1
    asterixNum -= 2
    let loopString = whitespace.repeat(whitespaceNum) + asterix.repeat(asterixNum) + newLine
    loopOutput += loopString
  }
  output = initialString + loopOutput
  let whitespaceNumStart = Math.floor(n / 2)
  let asterixNumStart = 1
  let loopOutputStart = ""
  for (let i = 1; i < n; i += 2) {
    let loopStringStart = whitespace.repeat(whitespaceNumStart) + asterix.repeat(asterixNumStart) + newLine
    whitespaceNumStart -= 1
    asterixNumStart += 2
    loopOutputStart += loopStringStart
  }
  output = loopOutputStart + output
  return output
}

// diamond(1), "*\n"
// diamond(3), " *\n***\n *\n"
// diamond(5), "  *\n ***\n*****\n ***\n  *\n"

console.log(diamond(0))

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

//? describe( "diamond()", function(){

//?     Test.assertEquals(diamond(1), "*\n")
//?     Test.assertEquals(diamond(3), " *\n***\n *\n")
//?     Test.assertEquals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
//?     Test.assertEquals(diamond(2), null)
//?     Test.assertEquals(diamond(-3), null)
//?     Test.assertEquals(diamond(0), null)
//?   });
