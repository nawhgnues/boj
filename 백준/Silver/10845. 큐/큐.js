const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.trim()); 
const answer = [];
const N = +input[0];
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item)
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if(this.length==0){
      return -1;
    }else{
      const popItem = this.head.item;
      this.head = this.head.next;
      this.length -= 1;
      return popItem;
    }
  }

  size(){
    return this.length;
  }

  empty(){
    if(this.length==0){
      return 1
    }else{
      return 0;
    }
  }

  front(){
    if(this.length==0){
      return -1;
    }else{
      return this.head.item
    }
  }

  back(){
    if(this.length==0){
      return -1;
    }else{
      return this.tail.item
    }
  }
}


let q = new Queue();

for(let i = 1; i <=N; i++){
  const command = input[i];
  switch(command){
    case 'front':
      answer.push(q.front())
      break;
    case 'back':
      answer.push(q.back())
      break;
    case 'size':
      answer.push(q.size())
      break;
    case 'empty':
      answer.push(q.empty())
      break;
    case 'pop':
      answer.push(q.pop())
      break;
    default:
      const [_,value] = command.split(' ');
      q.push(+value);
      break;
  }
}

console.log(answer.join('\n'))