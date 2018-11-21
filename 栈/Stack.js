// 栈的创建
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
    }
}

// let stack = new Stack()
// // console.log(stack.isEmpty()) // true
// stack.push(1)
// stack.push(100)
// // console.log(stack.peek())
// stack.push(1000)
// // console.log(stack.size())
// stack.pop()
// // console.log(stack.size())
// // stack.print()

// stack.print()

// 私有属性和闭包
// let Stack = (function() {
//     const itmes = new WeakMap()
//     class Stack {
//         constructor() {
//             itmes.set(this, [])
//         }
//         push(e) {
//             let s = itmes.get(this)
//             s.push(e)
//         }
//     }
//     return Stack
// })()

// 栈的使用
// 1.从十进制到二进制
const divideBy2 = decNumber => {
    let remStack = new Stack(),
        rem,
        binaryString = ''
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}

// 在一个简陋的进制转化函数可以不用模拟栈再使用，直接用数组。
const divideBy = decNumber => {
    let remStack = [],
        rem,
        binaryString = ''
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }
    while (remStack.length) {
        binaryString += remStack.pop()
    }
    return binaryString
}
console.log(divideBy(10), 111)
// 任意进制
function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF' //{6}
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()] //{7}
    }
    return baseString
}

function parenthesesChecker(symbols) {
    const stack = new Stack()
    const opens = '([{'
    const closers = ')]}'
    let balanced = true
    let index = 0
    let symbol
    let top

    while (index < symbols.length && balanced) {
        symbol = symbols[index]
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol)
        } else if (stack.isEmpty()) {
            balanced = false
        } else {
            top = stack.pop()
            if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                balanced = false
            }
        }
        index++
    }
    return balanced && stack.isEmpty()
}
//https://github.com/homobulla/algorithm/blob/master/20.valid-parentheses.js 类似于leecode这道题
