class LinkedList { 
    constructor(head = null) {
        this.head = head
    }

    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head = newNode
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value)
            return
        } else {
            const newNode = new Node(value)
            let current = this.head
            while (current.nextNode !== null) {
                current = current.nextNode
            }
            current.nextNode = newNode
        }
    }

    size() {
        let count = 0
        let current = this.head
        while (current !== null) {
            count++
            current = current.nextNode
        }
        return count
    }

    head() {
        if (this.head === null) {
            return undefined
        } else {
            return this.head.value
        }
    }
}



class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}