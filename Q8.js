//Reverse string using stack

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

    display() {
        var temp = this.top;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

var st = new Stack();

var s = "Hello World";

for (var i = 0; i < s.length; i++) {
    st.push(s.charAt(i));
}

st.display();