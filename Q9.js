//Balanced parenthesis using stack

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
        if (!this.isEmpty()) {
            var temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            return temp.data;
        }
    }
}

const s = new Stack();
checkParenthesis("{(a+b)*p}[(c-d)]")

function checkParenthesis(str) {
    var flag = true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            s.push(str[i]);
        }
        else if (str[i] == ")") {
            if (s.pop() != "(") {
                flag = false;
                break;
            }
        }
        else if (str[i] == "[") {
            s.push(str[i]);
        }
        else if (str[i] == "]") {
            if (s.pop() != "[") {
                flag = false;
                break;
            }
        }
        else if (str[i] == "{") {
            s.push(str[i]);
        }
        else if (str[i] == "}") {
            if (s.pop() != "{") {
                flag = false;
                break;
            }
        }
    }
    if ((!flag) || s.top != null) {
        console.log("Parenthesis in the expression are not balanced ");
    }
    else {
        console.log("Parenthesis in the expression are balanced");
    }
}