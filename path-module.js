const path = require('path')

console.log(path.sep)


const filePath = path.join('/content','sub-folder','text.txt')

console.log(filePath)

console.log(path.basename(filePath))

const absolute = path.resolve(__dirname,'content','sub-folder','text.txt')
console.log(absolute)

console.log(path.basename(absolute))