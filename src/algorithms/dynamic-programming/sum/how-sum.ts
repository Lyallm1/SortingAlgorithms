export function howSum(targetSum: number, numbers: number[], buffer = {}): number[] | null {
    if (targetSum in buffer) return buffer[targetSum]
    if (targetSum == 0) return []
    if (targetSum < 0) return null
    for (const number of numbers) {
        const result = howSum(targetSum - number, numbers, buffer)
        if (result != null) return [...result, number]
    }
    buffer[targetSum] = null
    return buffer[targetSum]
}
