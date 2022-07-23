class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

//   a -> b -> c -> d -> NULL
//  cur

// iterative
const printLinkedList = () => {
    let current = head;
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
};

const recursivePrintLinkedList = () => {
    if(head === null) return;
    console.log(head.val);
    recursivePrintLinkedList(head.next);
}

printLinkedList(a)