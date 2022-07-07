import { Stack } from "./Stack"

export class StackArray<T> implements Stack<T> {
    protected stack: T[]

    constructor(collection: T[] = []) {
        this.stack = [...collection]
    }

    push(item: T) {
        this.stack.push(item)
    }

    pop() {
        return this.stack.shift()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    size() {
        return this.stack.length
    }

    isEmpty(): boolean {
        return this.stack.length == 0
    }

    contains(item: T): boolean {
        return this.stack.includes(item)
    }

    clear() {
        this.stack.splice(0)
    }
}
