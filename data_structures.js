export class DynamicArray {
    constructor () {
        this.array = []
    }

    Append(val) {
        this.array.push(val)
    }

    Pop() {
        return this.array.pop()
    }
}

export class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}


export class LinkedList {
    constructor(head = null) {
        this.head = head 
        this.tail = head
    }
    
    PushBack(val) {
        let node = new ListNode(val)
        node.next = null
        
        if (this.tail === null) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    PopBack() {
        if (head == null) {
            console.error('This Linked List is empty')
        }

        if (head == null) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }


    }

    getFirst() {
        return this.head;
    }

    Size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
}

export class Stack{
    constructor () {
        this.stack = []
    }


    Push(val) {
        this.stack.push(val)
    }
    
    Pop(){
        return this.stack.pop()
    }
        

}