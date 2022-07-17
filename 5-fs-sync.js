const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./subfolder/test.txt', 'utf8')
console.log(first)

writeFileSync('./subfolder/result.txt', `The result is ${first}`)