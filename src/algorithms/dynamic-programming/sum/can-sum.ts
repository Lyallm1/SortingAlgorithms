export function canSum(targetSum: number, numbers: number[], buffer = {}): boolean {
    if (targetSum in buffer) return buffer[targetSum]
    if (targetSum == 0) return true
    if (targetSum < 0) return false
    for (const number of numbers) if (canSum(targetSum - number, numbers, buffer)) return true
    buffer[targetSum] = false
    return buffer[targetSum]
}
