export function gridTraveller(rows: number, columns: number, buffer = {}): number {
    const key = columns < rows ? `${columns}-${rows}` : `${rows}-${columns}`
    if (key in buffer) return buffer[key]
    if (rows <= 0 || columns <= 0) return 0
    if (rows == 0 || columns == 0) return 1
    return gridTraveller(rows - 1, columns, buffer) + gridTraveller(rows, columns - 1, buffer)
}
