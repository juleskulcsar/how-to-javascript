function secondBiggest(arr) {
    let max = -Infinity,
        result = -Infinity;
    for (const nr of arr) {
        if (nr > max) {
            [result, max] = [max, nr];
        } else if (nr < max && nr > result) {
            result = nr;
        }
    }
    return [result, max];
}
