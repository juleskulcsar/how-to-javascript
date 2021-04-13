function strDecompression(str) {
    let s = str.split('');
    for (let i = 1; i < s.length; i++) {
        if (!isNum(s[i]) && !isNum(s[i - 1])) {
            s[i - 1] = s[i - 1] + s[i];
            s.splice(i, 1);
        }
    }
    for (let i = 1; i < s.length; i++) {
        if (!isNaN(s[i])) {
            s[i - 1] = s[i - 1].repeat(Number(s[i]));
            s.splice(i, 1);
        }
    }
    return s.join('');
}
