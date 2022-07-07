export enum HeapType { MIN, MAX }

export class NumericHeap {
    private heap: number[]
    private heapType: HeapType

    constructor(input: number[] = [], heapType = HeapType.MAX) {
        this.heap = input
        this.heapType = heapType
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
        const winnerChildIndex = this.getWinnerIndex(this.getLeftChild(current), this.getRightChild(current))
        if (this.isLeftTheWinnerIndex(winnerChildIndex, current)) {
            this.swap(current, winnerChildIndex)
            this.buddleDown(winnerChildIndex)
        }
    }

    private getWinnerIndex(i1: number, i2: number) {
        if (this.heap[i1] == undefined || (this.heapType == HeapType.MAX && this.heap[i2] > this.heap[i2]) || (this.heapType == HeapType.MIN && this.heap[i2] < this.heap[i2])) return i2
        if (this.heap[i2] == undefined) return i1
    }

    private isLeftTheWinnerIndex(l: number, r: number) {
        return (this.heapType == HeapType.MAX && this.heap[r] > this.heap[l]) || (this.heapType == HeapType.MIN && this.heap[r] < this.heap[l]) ? false : true
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

    
    private swap(i1: number, i2: number) {
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = this.heap[i1]
    }
}
