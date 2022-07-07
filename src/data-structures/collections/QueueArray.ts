import { Queue } from "./Queue"

export class QueueArray<T> implements Queue<T> {
    protected queue: T[]

    constructor(collection: T[] = []) {
        this.queue = [...collection]
    }

    enqueue(item: T) {
        this.queue.push(item)
    }

    dequeue() {
        return this.queue.shift()
    }

    peek() {
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    isEmpty(): boolean {
        return this.queue.length == 0
    }

    contains(item: T): boolean {
        return this.queue.includes(item)
    }

    clear() {
        this.queue.splice(0)
    }
}
