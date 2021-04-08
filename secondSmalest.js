function secondSmallest(arr) {
    let min = +Infinity,
        result = +Infinity;
    for (const nr of arr) {
        if (nr < min) {
            [result, min] = [min, nr];
        } else if (nr > min && nr < result) {
            result = nr;
        }
    }
    return [result, min];
}
