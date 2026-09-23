class LinkedList { 
    constructor() {
        this._head = null
    }

    prepend(value) {
        const newNode = new Node(value, this._head)
        this._head = newNode
    }

    append(value) {
        if (this._head === null) {
            this.prepend(value)
            return
        } else {
            const newNode = new Node(value)
            let current = this._head
            while (current.nextNode !== null) {
                current = current.nextNode
            }
            current.nextNode = newNode
        }
    }

    size() {
        let count = 0
        let current = this._head
        while (current !== null) {
            count++
            current = current.nextNode
        }
        return count
    }

    head() {
        if (this._head === null) {
            return undefined
        } else {
            return this._head.value
        }
    }

    tail() {
        if (this._head === null) {
            return undefined
        } else {
            let current = this._head
            while (current.nextNode !== null) {
                current = current.nextNode
            }
            return current.value
        }
    }
}



class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}