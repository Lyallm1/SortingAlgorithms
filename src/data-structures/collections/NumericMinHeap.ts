export class NumericMinHeap {
    private heap: number[]

    constructor(input: number[] = []) {
        this.heap = input
        this.buildHeap(Math.floor(this.heap.length / 2))
    }

    toArray() {
        return this.heap
    }

    private buildHeap(current: number) {
        for (let i = current; i >= 0; i--) this.buddleDown(i)
    }

    private buddleDown(current: number) {
        if (this.isLeaf(current)) return
        const minChild = this.getMin(this.getLeftChild(current), this.getRightChild(current))
        if (this.heap[current] > this.heap[minChild]) {
            this.swap(current, minChild)
            this.buddleDown(minChild)
        }
    }

    private getLeftChild(i: number) {
        return i * 2 + 1
    }

    private getRightChild(i: number) {
        return (i + 1) * 2
    }

    private isLeaf(i: number) {
        return this.getLeftChild(i) >= this.heap.length && this.getRightChild(i) >= this.heap.length
    }

    private getMin(i1: number, i2: number) {
        if (this.heap[i1] == undefined || this.heap[i2] < this.heap[i1]) return i2
        if (this.heap[i2] == undefined) return i1
    }
    
    private swap(i1: number, i2: number) {
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = this.heap[i1]
    }
}
