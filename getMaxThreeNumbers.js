function max_three(arr) {
    let one = -Infinity;
    let two = -Infinity;
    let three = -Infinity;

    for (let i = 0; i < arr.length; i += 1) {
        let num = arr[i];
        if (num > three) {
            if (num >= two) {
                three = two;
                if (num >= one) {
                    two = one;
                    one = num;
                } else {
                    two = num;
                }
            } else {
                three = num;
            }
        }
    }
    return [one, two, three];
}
