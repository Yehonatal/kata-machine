class Node<T> {
    public data: T;
    public next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    prepend(item: T): void {
        const newNode = new Node<T>(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of range");
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        const newNode = new Node<T>(item);
        let current = this.head;
        let prev = null;
        let i = 0;

        while (current && i < idx) {
            prev = current;
            current = current.next;
            i++;
        }

        newNode.next = current;
        if (prev) {
            prev.next = newNode;
        } else {
            this.head = newNode;
        }

        this.length++;
    }

    append(item: T): void {
        const newNode = new Node<T>(item);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data === item) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.length--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        let i = 0;

        while (current && i < idx) {
            current = current.next;
            i++;
        }

        return current ? current.data : undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        let prev = null;
        let i = 0;

        while (current && i < idx) {
            prev = current;
            current = current.next;
            i++;
        }

        if (prev) {
            prev.next = current ? current.next : null;
        } else {
            this.head = current ? current.next : null;
        }

        if (current) {
            this.length--;
            return current.data;
        }

        return undefined;
    }
}
