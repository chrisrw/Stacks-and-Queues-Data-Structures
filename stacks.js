// Stacks are last in, first out
// Push, Pop, Peek
// Example: undo/repo feature in applications

const stack = []

// push
stack.push('dog')
stack.push('cat')
stack.push('bear')

// pop
stack.pop()

// peek
stack[stack.length-1]

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }
    push(element){
        //pushing increases size by 1
        this.size++
        //store element as key value pair
        this.storage[this.size] = element
    }
    pop() {
        //return last item in stack and remove from stack
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    peek() {
        return this.storage[this.size]
    }
}

const stack = new Stack()
stack.push('dog')
stack.push('cat')
stack.push('bear')

stack.pop()
