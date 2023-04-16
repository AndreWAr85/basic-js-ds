const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

   constructor() {
      this.key = {};
      this.front = 0;
      this.back = 0;
   }

   getUnderlyingList() {
      return `"value": ${this.key[this.front]}, "next": ${this.key[this.back]}`;
   }


   enqueue(key) {
      this.key[this.back] = key;
      this.back++;
      return key
   }

   dequeue() {
      const transitKey = this.key[this.front];
      delete this.key[this.front];
      this.front++;
      return transitKey;
   }
}

const queue = new Queue();

console.log(queue.enqueue(1))
console.log(queue.enqueue(3))
console.log(queue.dequeue())
console.log(queue.getUnderlyingList())

module.exports = {
   Queue
};
