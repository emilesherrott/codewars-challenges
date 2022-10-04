function zero(callback) {
    if(callback){
        let math = '0 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 0
    }
}
function one(callback) {
    if(callback){
        let math = '1 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 1
    }
}
function two(callback) {
    if(callback){
        let math = '2 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 2
    }
}
function three(callback) {
    if(callback){
        let math = '3 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 3
    }
}
function four(callback) {
    if(callback){
        let math = '4 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 4
    }
}
function five(callback) {
    if(callback){
        let math = '5 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 5
    }
}
function six(callback) {
    if(callback){
        let math = '6 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 6
    }
}
function seven(callback) {
    if(callback){
        let math = '7 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 7
    }
}
function eight(callback) {
    if(callback){
        let math = '8 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 8
    }
}
function nine(callback) {
    if(callback){
        let math = '9 ' + callback
        let arr = math.split(' ')
        let valOne = Number(arr[0])
        let valTwo = Number(arr[2])
        if(callback[0] === '+'){
            return Math.round(valOne + valTwo)
        } else if(callback[0] === '-'){
            return Math.round(valOne - valTwo)
        } else if(callback[0] === '*'){
            return Math.round(valOne * valTwo)
        } else if(callback[0] === '/'){
            return Math.round(valOne / valTwo)
        }
    } else {
        return 9
    }
}







function plus(callback) {
    return `+ ${callback}` 
}

function minus(callback) {
    return `- ${callback}` 
}

function times(callback) {
    return `* ${callback}` 
}

function dividedBy(callback) {
    return `/ ${callback}` 
}



console.log(five(dividedBy(seven())))


module.exports = { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy }

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(seven(times(five())), 35);
//   Test.assertEquals(four(plus(nine())), 13);
//   Test.assertEquals(eight(minus(three())), 5);
//   Test.assertEquals(six(dividedBy(two())), 3);
//     });
//   });
  