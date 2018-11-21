function LinkedList() {
    let Node = function(element) {
        this.element = element
        this.next = null
    }
    let length = 0,
        head = null
    this.append = function(element) {
        let node = new Node(element)
        let current
        if (head === null) {
            head = node
            // 若为空，直接赋值给表头，下一个node元素自动成为null
        } else {
            current = head
            // 我们只有第一个元素的引用，所以需要从表头head开始查找
            while (current.next) {
                //current.next非null则意味着不是最后一项
                current = current.next // 循环找到链表最后一项
            }
            //此时的current就是最后一项了，将其指针指向我们添加的元素
            current.next = node
        }
        // 更改链表长度
        length++
    }
    this.insert = function(position, element) {
        let node = new Node(element)

        if (position > -1 && position <= length) {
            let current = head,
                index = 0,
                previous
            if (position === 0) {
                head = node
                node.next = current
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function(position) {
        if ((position > -1) & (position < length)) {
            let current = head,
                index = 0,
                previous
            if (position == 0) {
                // 此时current变量就是对列表中第一个元素的引用
                // 如果是第一项，将第二项赋值给第一项，
                // 指针断了就意味着删除 head赋给current.next，就会移除第一个元素
                head = current.next
            } else {
                while (index++ < position) {
                    // 循环赋值比较，current永远是循环列表当前元素的引用
                    // previous为前一个元素的引用
                    previous = current
                    current = current.next
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }
            length-- // {10}
            return current.element
        } else {
            return null
        }
    }
    this.remove = function(element) {}
    this.indexOf = function(element) {}
    this.isEmpty = function() {}
    this.size = function() {}
    this.getHead = function() {}
    this.toString = function() {
        let current = head, //{1}
            string = '' //{2}
        while (current) {
            //{3}
            string += current.element + (current.next ? 'n' : '') //{4}
            current = current.next //{5}
        }
        return string //{6}
    }
    this.print = function() {}
}
let list = new LinkedList()
list.append(15)
list.append(10)
list.append(20)

// console.log(list.toString())
list.insert(2, 1)

console.log(list.toString())

this.insert = function(position, element) {
    //检查越界值
    if (position >= 0 && position <= length) {
        let node = new Node(element),
            current = head,
            previous,
            index = 0
        if (position === 0) {
            //在第一个位置添加
            if (!head) {
                //新增的 {1}
                head = node
                tail = node
            } else {
                node.next = current
                current.prev = node //新增的 {2}
                head = node
            }
        } else if (position === length) {
            //最后一项 //新增的
            current = tail // {3}
            current.next = node
            node.prev = current
            tail = node
        } else {
            while (index++ < position) {
                //{4}
                previous = current
                current = current.next
            }
            node.next = current //{5}
            previous.next = node
            current.prev = node //新增的
            node.prev = previous //新增的
        }
        length++ //更新列表的长度
        return true
    } else {
        return false
    }
}
