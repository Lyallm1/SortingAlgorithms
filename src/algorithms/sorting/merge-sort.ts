import { SortingOrder } from "../../util/SortingOrder"

enum Operand { Left, Right }

function split(input: number[]) {
    const pivot = Math.floor(input.length / 2)
    return {left: input.slice(0, pivot), right: input.slice(pivot)}
}
function whoGoesFirst(x: number, y: number, order: SortingOrder) {
    if (order == SortingOrder.Ascending && x <= y) return Operand.Left
    if ((order == SortingOrder.Ascending && x > y) || (order == SortingOrder.Descending && x <= y)) return Operand.Right
}
function merge(left: number[], right: number[], order: SortingOrder) {
    let leftIndex = 0, rightIndex = 0
    const sortedArray: number[] = []
    while (leftIndex < left.length || rightIndex < right.length) {
       if (leftIndex < left.length && rightIndex < right.length) {
        whoGoesFirst(left[leftIndex], right[rightIndex], order) == Operand.Left ? sortedArray.push(left[leftIndex]) : sortedArray.push(right[rightIndex])
        whoGoesFirst(left[leftIndex], right[rightIndex], order) == Operand.Left ? leftIndex++ : rightIndex++
       }
       leftIndex < left.length && rightIndex >= right.length ? sortedArray.push(left[leftIndex]) : sortedArray.push(right[rightIndex])
       leftIndex < left.length && rightIndex >= right.length ? leftIndex++ : rightIndex++
    }
    return sortedArray
}
export function mergeSort(input: number[], order: SortingOrder) {
    return !Array.isArray(input) || input.length <= 1 ? input : merge(mergeSort(split(input).left, order), mergeSort(split(input).right, order), order)
}
