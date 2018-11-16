let arr = [1, 2, 8, 4]
arr[arr.length] = 6
console.log(arr) //[ 1, 2, 3, 4, 5 ]

// 删除数组首位元素,模拟shift
const deleteFirst = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length -= 1
    return arr
}
arr = deleteFirst(arr)
console.log(arr) //[ 2, 3, 4, 5 ]

const addFirst = (arr, x) => {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = x
    return arr
}

arr = addFirst(arr, 100)
console.log(arr)

var isEven = function(x) {
    return x % 2 != 0
}

console.log(arr.some(isEven))
