// 在这种方法中，我们要用一个WeakMap来保存私有属性items
// 并用外层函数（闭包）来封装Queue类。

let Queue = (function() {
    const items = new WeakMap()
    class Queue {
        constructor() {
            items.set(this, [])
        }
        enqueue(...e) {
            let q = items.get(this)
            q.push(...e)
        }
        dequeue() {
            let q = items.get(this)
            return q.shift()
        }
        front() {
            let q = items.get(this)
            return q[0]
        }
        isEmpty() {
            let q = items.get(this)
            return q.length == 0
        }
        size() {
            let q = items.get(this)
            return q.length
        }
        print() {
            let q = items.get(this)
            console.log(q.toString())
        }
    }
    return Queue
})()
// let queue = new Queue()

// console.log(queue.isEmpty())
// queue.enqueue('homo', 'bulla')
// console.log(queue.size())
// queue.print()
// queue.dequeue()
// queue.print()

function PriorityQueue() {
    let items = []
    function QueueElement(element, priority) {
        // {1}
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)
        let added = false
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                // {2}
                items.splice(i, 0, queueElement) // {3}
                added = true
                break // {4}
            }
        }
        if (!added) {
            items.push(queueElement) //{5}
        }
    }
    this.print = function() {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`)
        }
    }
    //其他方法和默认的Queue实现相同
    this.dequeue = function() {
        return itmes.shift()
    }
    this.front = function() {
        return items[0]
    }
    this.isEmpty = function() {
        return items.length == 0
    }
    this.size = function() {
        return itmes.length
    }
}
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.print()
