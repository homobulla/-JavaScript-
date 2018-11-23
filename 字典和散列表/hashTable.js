// 散列表

function HashTable() {
    let table = {}

    const loseloseHashCode = function(key) {
        let hash = 0
        key.split('').map((v, i) => {
            hash += key.charCodeAt(i)
        })
        return hash % 37
    }

    this.put = function(key, value) {
        let position = loseloseHashCode(key)
        console.log(position + ' - ' + key)
        table[position] = value
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined
    }
}

let hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('John', 'sssssssssssss')

hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.get('John'))
