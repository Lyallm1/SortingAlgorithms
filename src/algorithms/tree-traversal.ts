import { BinaryTree } from '../data-structures/BinaryTree'

export function recursivePreOrderTraversal<T>(node: BinaryTree<T>): T[] {
    return node == null ? [] : [node.value, ...recursivePreOrderTraversal(node.leftChild), ...recursivePreOrderTraversal(node.rightChild)]
}
export function iterativePreOrderTraversal<T>(node: BinaryTree<T>): T[] {
    const result = []
    if (node == null) return result
    const stack = [node]
    while (stack.length > 0) {
        const currentNode = stack.pop()
        result.push(currentNode.value)
        if (currentNode.rightChild != null) stack.push(currentNode.rightChild)
        if (currentNode.leftChild != null) stack.push(currentNode.leftChild)
    }
    return result
}
export function iterativePreOrderTraversalRightChildOnly<T>(node: BinaryTree<T>) {
    const result = []
    if (node == null) return result
    const stack = [node]
    let currentNode = node
    while (stack.length > 0) {
        if (currentNode != null) {
            result.push(currentNode.value)
            if (currentNode.rightChild != null) stack.push(currentNode.rightChild)
        }
        currentNode = currentNode ? currentNode.leftChild : stack.pop()
    }
    return result
}
export function recursiveInOrderTraversal<T>(node: BinaryTree<T>): T[] {
    return node == null ? [] : [...recursiveInOrderTraversal(node.leftChild), node.value, ...recursiveInOrderTraversal(node.rightChild)]
}
export function iterativeInOrderTraversal<T>(node: BinaryTree<T>) {
    const result = []
    if (node == null) return result
    const stack = []
    let currentNode = node
    while (stack.length > 0 || currentNode != null) {
        if (currentNode != null) {
            stack.push(currentNode)
            currentNode = currentNode.leftChild
        } else {
            currentNode = stack.pop()
            result.push(currentNode.value)
            currentNode = currentNode.rightChild
        }
    }
    return result
}
export function iterativeInOrderTraversalWithDoubleWhile<T>(node: BinaryTree<T>) {
    const result = []
    if (node == null) return result
    const stack = []
    let currentNode = node
    while (stack.length > 0 || currentNode != null) {
        while (currentNode != null) {
            stack.push(currentNode)
            currentNode = currentNode.leftChild
        }
        currentNode = stack.pop()
        result.push(currentNode.value)
        currentNode = currentNode.rightChild
    }
    return result
}
export function recursivePostOrderTraversal<T>(node: BinaryTree<T>): T[] {
    return node == null ? [] : [...recursivePostOrderTraversal(node.leftChild), ...recursivePostOrderTraversal(node.rightChild), node.value]
}
export function iterativePostOrderTraversal<T>(node: BinaryTree<T>) {
    const result = []
    if (node == null) return result
    const visited = new Set<BinaryTree<T>>()
    let current = node
    while (current != null && !visited.has(current)) {
        if (current.leftChild != null && !visited.has(current.leftChild)) current = current.leftChild
        else if (current.rightChild != null && !visited.has(current.rightChild)) current = current.rightChild
        else {
            result.push(current.value)
            visited.add(current)
            current = node
        }
    }
    return result
}
export function iterativePostOrderTraversalRightChildOnly<T>(node: BinaryTree<T>) {
    const result = []
    if (node == null) return result
    const queue = [node]
    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current.value)
        if (current.leftChild != null) queue.push(current.leftChild)
        if (current.rightChild != null) queue.push(current.rightChild)
    }
    return result
}
