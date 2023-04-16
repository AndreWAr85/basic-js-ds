const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
   constructor(...value) {
      this.storage = [...value.reverse()];
   }
   push(value) {
      return this.storage.unshift(value);
   }
   peek() {
      return this.storage[0];
   }

   pop() {
      return this.storage.shift();
   }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
module.exports = {
   Stack
};
