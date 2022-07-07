export function shortestSum(targetSum: number, numbers: number[], buffer = {}): number[] | null {
    if (targetSum in buffer) return buffer[targetSum]
    if (targetSum == 0) return []
    if (targetSum < 0) return null
    let min: number[] | null = null
    for (const number of numbers) {
        const bestSumResult = shortestSum(targetSum - number, numbers, buffer)
        if (bestSumResult != null) {
            const result = [...bestSumResult, number]
            if (min == null || result.length < min.length) min = result
        }
    }
    buffer[targetSum] = min
    return min
}
