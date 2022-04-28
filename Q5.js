//Linear queue using linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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
            this.front = this.front.next;
            temp.next = null;
            console.log("Deleted: ", temp.data);
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            var temp=this.front;
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
        }
    }
}

var q = new Queue();
q.insert(1);
q.insert(2);
q.insert(3);
q.insert(4);
q.display();
q.delete();
q.display();
