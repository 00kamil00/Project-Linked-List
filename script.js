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
}



class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}


// const list = new LinkedList()
// list.append("B")
// list.prepend("A")
// list.append("C")

// console.log(list.head.value)
// console.log(list.head.nextNode.value)
// console.log(list.head.nextNode.nextNode.value)
// console.log(list.head.nextNode.nextNode.nextNode)