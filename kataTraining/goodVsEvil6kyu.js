const goodVsEvil = (good, evil) => {
    const goodRank = good.split(' ').map(str => Number(str)).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    const evilRank = evil.split(' ').map(str => Number(str)).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    if (goodRank > evilRank) return `Battle Result: Good triumphs over Evil`
    else if (evilRank > goodRank) return `Battle Result: Evil eradicates all trace of Good`
    else return 'Battle Result: No victor on this battle field'
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))

module.exports = goodVsEvil