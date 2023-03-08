class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Adds a new node to the end of the list
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let tail = this.head;

    while (tail.nextNode !== null){
      tail = tail.nextNode;
    }
    tail.nextNode = node;
    return this.head;
  }

  //Adds a new node to the beginning of the list
  prepend(value) {
    let node = new Node(value);
    let temp = this.head;

    if(this.head) {
      this.head = node;
      this.head.nextNode = temp;
      return this.head;
    }
  }

  //Returns the total number of nodes
  size() {
    let count = 0;
    let current = this.head;

    while(current !== null) {
      current = current.nextNode;
      count += 1;
    }
    return count;
  }

  //Returns the first node of the list
  getHead() {
    let current = this.head;
    return current;
  }

  //Returns the last node of the list
  getTail() {
    let current = this.head;

    while(current.nextNode !== null){
      current = current.nextNode;
      }
      return current;
    }

  //Returns the node at the specified index
  at(index) {
    let current = this.head;
    for(let i = 1; i < index; i += 1){
      current = current.nextNode;
    }
    if (current === null){
      return alert('Index not found');
    } 
    return current;
  }

  //Removes the last node
  pop() {
    let index = list.size();
    let prevNode = list.at(index - 1);
    prevNode.nextNode = null;
    
    return this.head;
  }

  //Searches list for value and returns true if found
  contains(value) {
    let current = this.head;
    let index = 0;

    while(current !== null) {
      
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  }

  //Finds and returns the index of the node containing the value
  find(value) {
    let current = this.head;
    let index = 0;
    while(current !== null) {
      index += 1;
      if (current.value === value) {
        return index;
      } else 
        current = current.nextNode;
    }
    return alert('Value not found');
  }

  //Represents LinkedList objects as string
  toString() {
    let current = this.head;
    let str = '';

    while(current !== null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += 'null';

    return console.log(str);
  }
}

const list = new LinkedList();

list.append(16); 
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
console.log(list);
console.log(list.contains(30));
list.toString();