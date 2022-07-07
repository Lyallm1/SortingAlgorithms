export interface Collection<T> {
    size(): number
    isEmpty(): boolean
    contains(item: T): boolean
    clear(): void
}
