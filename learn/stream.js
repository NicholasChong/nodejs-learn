const Stream = require('learn/stream')
const fs = require('fs')

const readableStream = new Stream.Readable();


//重写_read方法
readableStream._read = () => {
}

readableStream.push('Hello')
readableStream.push('My Name is Nicholas')

// 监听data事件
readableStream.on('data', str => {
    console.log(str.toString())
})

readableStream.push('How are you')


var infoTextStream = fs.createReadStream('article.txt')

infoTextStream.on('open', () => {
    console.log('file open ~')
})

infoTextStream.on('data', (str) => {
    console.log('file loading ~')
    console.log(str.toString())
})

infoTextStream.on('error', (err) => {
    console.log('err ~', err)
})

infoTextStream.on('close', () => {
    console.log('file close ~')
})

console.log('js file end')


const writableStream = new Stream.Writable()

writableStream._write = ((chunk, encoding, callback) => {
    console.log(chunk.toString())
    console.log(encoding)
    callback()
})

writableStream.write('Hello Nicholas', () => {
    console.log('写入完成')
})

var data = 'May The Force Be With You'
var fsw = fs.createWriteStream('fsw.txt')

fsw.write(data, 'utf-8')
fsw.write('原力与你同在', 'utf-8')
fsw.end()

fsw.on('finish', () => {
    console.log('write file finished')
})

fsw.on('error', err => {
    console.log('write file error ', err)
})

const read = new Stream.Readable()
read._read = () => {
}

const write = new Stream.Writable()
write._write = (chunk, encoding, callback) => {
    console.log(chunk.toString())
    callback()
}

read.pipe(write)

read.push('hello ~')
read.push('My name is Nicholas ~')

read.on('readable', () => {
    console.log(read.read().toString())
})

read.push('Nice to meet you ~')
