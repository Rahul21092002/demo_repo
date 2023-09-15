// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/sub-folder/first.txt','utf8')
// const second = readFileSync('./content/sub-folder/second.txt','utf8')

// writeFileSync('./content/sub-folder/result-sync.txt','Hello there this is a file created by writeFileSync method of the fs module')


// asynchronous fs method

const { log } = require('console');
const {readFile,writeFile} = require('fs')
console.log('start');

readFile('./content/sub-folder/first.txt','utf8',(err, result) => {
  if(err) {
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/sub-folder/second.txt','utf8',(err,result) => {
    if(err){
      console.log(err)
      return
    }
    const second = result;
    writeFile('./content/sub-folder/reslut-async.txt',`This the appended result of first and second : ${first}, ${second}`,(err) => {
      if(err) {
        console.log(err)
        return
      }
      console.log('File written successfully')
    
    })
  })
})
console.log('ended');