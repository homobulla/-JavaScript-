function Dictionary() {
    let items = {}
    this.has = function(value) {
        return items.hasOwnProperty(value)
    }
    this.set = function(key, value) {
        items[key] = value
    }
    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key]
            return true
        } else {
            return false
        }
    }
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }
    this.clear = function() {
        items = {}
    }
    this.size = function() {
        return Object.keys(items).length
    }
    this.keys = function() {
        return Object.keys(items)
    }
    this.values = function() {
        let values = []
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
    this.getItems = function() {
        return items
    }
}

let dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('John', 'homobulla@email.com')

dictionary.set('Tyrion', 'tyrion@email.com')
console.log(dictionary.has('Gandalf')) //true
console.log(dictionary.size()) // 3
console.log(dictionary.getItems()) // { Gandalf: 'gandalf@email.com',John: 'homobulla@email.com',Tyrion: 'tyrion@email.com' }
console.log(dictionary.keys()) // [ 'Gandalf', 'John', 'Tyrion' ]
console.log(dictionary.values()) // [ 'gandalf@email.com','homobulla@email.com','tyrion@email.com' ]
console.log(dictionary.get('Tyrion'))

dictionary.delete('John')
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.getItems())
