export function linearSearch(target: number, sequence: number[]) {
    for (const element of sequence) if (element == target) return true
    return false
}
export function binarySearch(target: number, sequence: number[]) {
    let start = 0, end = sequence.length - 1
    while (start != end) {
        const middle = Math.trunc((start + end) / 2)
        target < sequence[middle] ? end = middle - 1 : start = middle
    }
    return target == sequence[end]
}
