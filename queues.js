// Queue

const queue = [];

// enqueue
//First in, first out (push and shift)
queue.push('seahorse');
queue.push('dolphin');
queue.push('whale shark');
// [ 'seahorse', 'dolphin', 'whale shark' ]
// dequeue
queue.shift();
// [ 'dolphin', 'whale shark' ]

// Queue with JS Classes

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    // adding to the back
    this.storage[(this.tail = element)];
    this.tail++;
  }
  dequeue() {
    // removing from the front
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue('seahorse');
queue.enqueue('dolphin');
queue.enqueue('whale shark');

queue.dequeue();
// Removes seahorse
