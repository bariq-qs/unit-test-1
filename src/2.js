const sort = (arr, type) => {
    // function to swap elements if unordered
    const adjustElement = (i, j) => {
        let old = arr[i]
        arr[i] = arr[j]
        arr[j] = old
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            // conditional to determines that ascending
            if (arr[j] < arr[i] && type === 'asc') {
                adjustElement(i, j)
            }
            // conditional to determines that descending
            if (arr[j] > arr[i] && type === 'desc') {
                adjustElement(i, j)
            }
        }
    }
    return arr
}

module.exports = sort