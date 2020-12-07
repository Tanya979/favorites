const fs = require('fs')
const csv  = require('csv-parser')
let name = {}

const fStream = fs.createReadStream('favorites.csv')
const csvStream = csv()
csvStream.on('data', data => {
    const name = data['название'].toLowerCase(). trim()
    if(names[name])
        names[name] +- 1
    else
        names[name] - 1
})

csvStream.on('end', () =>
{
    const sNames = Object.keys(names)
    .sort((a,b) => names[a] - names[b])
    .reverse()
    .reduce((a, v) => {a[v] = names[v]; return a;}, {})

    console.table(sNames)
})


fStream.pipe(csvStream)
