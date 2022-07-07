export function sum(matrix: number[][]) {
    let sum = 0
    matrix.forEach(row => row.forEach(col => sum += col))
    return sum
}
export function sumDiagonal(matrix: number[][]) {
    let sum = 0
    for (let i = 0; i < (matrix.length < matrix[0].length ? matrix.length : matrix[0].length); i++) sum += matrix[i][i]
    return sum
}
export function sumAntiDiagonal(matrix: number[][]) {
    let sum = 0
    for (let i = 0; i < (matrix.length < matrix[0].length ? matrix.length : matrix[0].length); i++) sum += matrix[i][matrix.length - 1 - i]
    return sum
}
export function sumFrame(matrix: number[][]) {
    let sum = 0
    matrix[0].forEach((col, i) => sum += col + matrix[matrix.length - 1][i])
    for (let i = 1; i < matrix.length - 1; i++) sum += matrix[i][0] + matrix[i][matrix[0].length - 1]
    return sum
}
