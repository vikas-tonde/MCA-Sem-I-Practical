//Reverse stack using queue

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}
class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        if (this.top == null)
            return true;
        return false;
    }

    push(data) {
        if (this.isEmpty()) {
            this.top = new Node(data);
        }
        else {
            var n = new Node(data);
            n.next = this.top;
            this.top = n;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack underflow");
        }
        else {
            var n = this.top;
            this.top = this.top.next;
            n.next = null;
            return n.data;
        }
    }

    popAddToQueue() {
        while (!this.isEmpty()) {
            q.insert(this.pop());
        }
        this.top=null;
    }

    display() {
        var temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        if (this.front == null && this.rear == null)
            return true;
        return false;
    }

    insert(data) {
        if (this.isEmpty()) {
            this.front = this.rear = new Node(data);
        }
        else {
            var n = new Node(data);
            this.rear.next = n;
            this.rear = n;
        }
    }

    delete() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            var temp = this.front;
            if (this.front == this.rear)
                this.front = this.rear = null
            else
                this.front = this.front.next;
            temp.next = null;
            return temp.data;
        }
    }

    pushToStack() {
        while (!this.isEmpty()) {
            s.push(this.delete());
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            var temp = this.front;
            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log("Stack is: ");
s.display();
const q= new Queue();
s.popAddToQueue();
console.log("Queue is : ");
q.display();
q.pushToStack();
console.log("Reversed stack is: ");
s.display();
