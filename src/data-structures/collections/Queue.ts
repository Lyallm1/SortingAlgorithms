import { Collection } from "./Collection"

export interface Queue<T> extends Collection<T> {
    enqueue(item: T): void
    dequeue(): T | undefined
    peek(): T | undefined
}
