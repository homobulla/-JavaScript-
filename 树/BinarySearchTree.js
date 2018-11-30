function BinarySearchTree() {
    let Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    let root = null
    let insertNode = function(root, newNode) {}
    this.insert = function(key) {
        let newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
}
