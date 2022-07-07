import { Collection } from "./Collection"

export interface Stack<T> extends Collection<T> {
    push(item: T): void
    pop(): T | undefined
    peek(): T | undefined
}
