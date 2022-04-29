//Priority queue using linked list

class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.front = null;
    }

    isEmpty() {
        if (this.front == null)
            return true;
        return false;
    }

    insert(data, priority) {
        var n = new Node(data, priority);
        if (this.isEmpty() || priority < this.front.priority) {
            n.next = this.front;
            this.front = n;
        }
        else {
            var temp = this.front;
            while (temp.next != null && temp.next.priority <= priority) {
                temp = temp.next;
            }
            n.next = temp.next;
            temp.next = n;
        }
    }

    delete() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            var temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            console.log("Deleted: ", temp.data);
        }
    }

    display() {
        var temp = this.front;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

var q = new PriorityQueue();
q.insert(1, 3);
q.insert(2, 1);
q.insert(3, 4);
q.insert(4, 2);
q.display();
q.delete();
q.display();