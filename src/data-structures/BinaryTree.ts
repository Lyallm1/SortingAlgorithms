export class BinaryTree<T> {
    value: T = null
    leftChild: BinaryTree<T> = null
    rightChild: BinaryTree<T> = null

    constructor(value: T) {
        this.value = value
    }
}
