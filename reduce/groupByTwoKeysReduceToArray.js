const arr = [
    { x: 'a', y: 'a', z: 1 },
    { x: 'a', y: 'a', z: 2 },
    { x: 'c', y: 'a', z: 3 },
    { x: 'a', y: 'a', z: 3 },
    { x: 'c', y: 'c', z: 2 },
    { x: 'b', y: 'c', z: 1 }
];

const result = Object.values(
    arr.reduce(
        (a, { x, y, z }) => ((a[`${x}_${y}`] ??= { x, y, z: [] }).z.push(z), a),
        {}
    )
).sort((a, b) => a.x.localeCompare(b.x));

//[{x: 'a', y: 'a', z: [1,2,3]}
//{ x: 'b', y: 'c', z: [1] }
//{ x: 'c', y: 'a', z: [3] }
//{ x: 'c', y: 'c', z: [2] }]
