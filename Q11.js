//Implement binary search tree with its operations

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var n = new Node(data);
        if (this.root == null)
            this.root = n;
        else
            this.insertNode(this.root, n);
    }

    insertNode(node, n) {
        if (node.data > n.data) {
            if (node.left == null)
                node.left = n;
            else
                this.insertNode(node.left, n);
        }
        else {
            if (node.right == null)
                node.right = n;
            else
                this.insertNode(node.right, n);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var temp = this.findMinNode(node.right);
            node.data = temp.data;
            node.right = this.removeNode(node.right, temp.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}
var bst = new Tree();
bst.insert(55);
bst.insert(10);
bst.insert(89);
bst.insert(62);
bst.insert(104);
bst.insert(60);
bst.insert(5);
bst.insert(-10);
bst.insert(20);
console.log("Inorder Traversal: ");
bst.inorder(bst.root);
console.log("Preorder Traversal: ");
bst.preorder(bst.root);
console.log("Postorder Traversal: ");
bst.postorder(bst.root);

bst.remove(89);

console.log("Inorder Traversal: ");
bst.inorder(bst.root);
console.log("Preorder Traversal: ");
bst.preorder(bst.root);
console.log("Postorder Traversal: ");
bst.postorder(bst.root);