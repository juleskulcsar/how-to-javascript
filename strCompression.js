function StrCompression(str) {
    let compressedStr = '';
    let count = 0;
    if (str.length === 0) {
        return;
    }
    for (let i = 0; i < str.length; i++) {
        count++;
        if (str[i] != str[i + 1]) {
            compressedStr = str[i] + count;
            count = 0;
        }
    }
    console.log(compressedStr);
}
