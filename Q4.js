//Stack using Linked list
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
            console.log("Popped: ", n.data);
        }
    }

    display() {
        var temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.display();
s.pop();
s.display();