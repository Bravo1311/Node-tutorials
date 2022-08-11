const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


console.log(first + '\n' + second)
writeFileSync('./content/result-sync.txt', `\nHere is the result: ${first},  ${first}`, {flag:'a'})