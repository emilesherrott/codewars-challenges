// Make a function called vowelCount that takes in a string and return an integer that represents the number of vowels (aeiou) in the string input. */

// Write your function here
// const vowelCount = str => str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0

const vowelCount = str => {
    const vowels = ['a','e','i','o','u']
    const arr = str.split('')
    const numVowels = arr.filter(character => vowels.includes(character.toLowerCase()))
    return numVowels.length
}


/* Uncomment these one by one and hit 'Run' to test your code!: */
console.log(vowelCount('futureproof')) /*=> 5 */
console.log(vowelCount('HEllo World')) /*=> 3 */

