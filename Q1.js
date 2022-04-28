//Singly linked list implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    create(data) {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            var temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = new Node(data);
        }
        this.count = this.count + 1;
    }

    insert(data, pos) {
        if (pos == 1) {
            var n = new Node(data);
            n.next = this.head;
            this.head = n;
        }
        else if (pos >= this.count + 1) {
            this.create(data);
        }
        else {
            var n = new Node(data);
            var i = 2;
            var temp = this.head;
            while (i != pos && temp.next != null) {
                temp = temp.next;
                i = i + 1;
            }
            n.next = temp.next;
            temp.next = n;
        }
        this.count = this.count + 1;
        console.log("After insertion");
        this.display();
    }

    delete(data) {
        if (this.head == null) {
            console.log("List is empty");
        }
        else {
            var temp = this.head;
            var prev = null;
            var flag = false;
            while (temp.next != null) {
                if (temp.data == data) {
                    flag = true;
                    break;
                }
                prev = temp;
                temp = temp.next;
            }
            if (flag) {
                if (temp.next == null) {
                    prev.next = null;
                }
                else if (temp == this.head) {
                    this.head = this.head.next;
                    temp.next = null;
                }
                else {
                    prev.next = temp.next;
                    temp.next = null;
                }
            }
            this.count = this.count - 1;
            console.log("After deletion");
            this.display();
        }
    }

    display() {
        if (this.head == null) {
            console.log("List is empty");
        }
        else {
            var temp = this.head;
            console.log("The list is as follows: ");
            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}

const list = new LinkedList()
list.create(1);
list.create(2);
list.create(3);
list.insert(10, 1);
list.insert(30, 3);
list.insert(40, 500);
list.delete(3);
list.display();
