function chunkSubstr(atr, size) {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, p = 0; i < numChunks; i++, p += size) {
        chunks[i] = str.substr(p, size);
    }
    console.log(chunks);
}
